from flask import Flask, url_for, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
from base64 import b64decode
import uuid
import io
import re
from PIL import Image
from facespoof import image_handler


app = Flask(__name__)
CORS(app)


UPLOAD_FOLDER = 'upload_images'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
  username = db.Column(db.String(200), primary_key=True)
  def __repr__(self):
    return '<User %r>' % self.username


@app.route('/register', methods=['POST'])
@cross_origin()
def signup():
  username = request.json['username']
  user = User.query.filter_by(username=username).first()
  if user == None:
    return jsonify({ 'user': username })
  else:
    return  jsonify({ 'user': '' })


@app.route('/login', methods=['POST'])
@cross_origin()
def login():
  username = request.json['username']
  user = User.query.filter_by(username=username).first()
  if user == None:
    return jsonify({ 'user': '' })
  else:
    return jsonify({ 'user': username })
  

@app.route('/test-image', methods=['POST'])
def checkImage():
  message = request.get_json(force=True)
  encoded = message['image']  # image in base64 format
  user = message['username']
  image_data = re.sub('^data:image/.+;base64,', '', encoded)

  filename = f'{uuid.uuid4().hex}.jpeg'
  decoded = b64decode(image_data)
  image = Image.open(io.BytesIO(decoded))
  # pass this image to next functions
    
  foundUser = User.query.filter_by(username=user).first()
  if foundUser == None: # user came via signup
    new_user = User(username=user)
    reg_res = image_handler(image, user, "register")
    print("Registration response:  ", reg_res)
    try:
      if reg_res == 'User registered':
        db.session.add(new_user)
        db.session.commit()
        response = { 'result': reg_res, 'verified': True }
      else:
        response = {'result': reg_res, 'verified': False }
    except:
      response = { 'result': 'Failed to add user to the database, please try again', 'verified': False }

    return jsonify(response)
  else: # user came via login
    log_res = image_handler(image, user, "login")
    print("Login response:  ", log_res)
    if log_res == "User matched":
      response = { 'result': log_res, 'verified': True }
    else:
      response = { 'result': log_res, 'verified': False }

    return jsonify(response)


if __name__ == '__main__':
  app.run(debug=True)