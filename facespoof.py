import numpy as np
import torch
import torch.nn as nn
import torch.nn.functional as F
from PIL import Image
import torchvision
import torchvision.transforms as transforms
from facenet_pytorch import MTCNN, InceptionResnetV1
import matplotlib.pyplot as plt

transform = transforms.Compose(
    [transforms.ToTensor(),
     transforms.Normalize(mean=[0.485, 0.456, 0.406],
                                 std=[0.229, 0.224, 0.225])])

def return_image_tensor(image):
    image = image.resize((240,240))
    ycbcr = image.convert('YCbCr')
    return transform(ycbcr)

class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        # 3 input image channel, 16 output channels, 3x3 square convolution kernel
        self.fe = torchvision.models.resnet18(pretrained=True)
        self.fc = nn.Linear(1000, 2)
        
    def forward(self, x):
        x = self.fe(x)
        x = F.log_softmax(self.fc(x),dim = 1)
        return x

mtcnn = MTCNN(image_size=240, margin=20,  post_process=False, keep_all=True, min_face_size=20)
resnet = InceptionResnetV1(pretrained='vggface2').eval()
model = Net()
state_dict = torch.load('./weights/classification_weight.pth', map_location=torch.device('cpu'))
model.load_state_dict(state_dict, strict=False)
model.eval()

def match_face_register(image, name):
    image_tensor = transform(image)
    embedding = resnet(image_tensor.unsqueeze(0)).detach()
    try:
        saved_data = torch.load('data.pt')
        embedding_list = saved_data[0] 
        name_list = saved_data[1] 
        dist_list = []
        for embeddings in embedding_list:
            distance = torch.dist(embedding,embeddings).item()
            dist_list.append(distance)
        if min(dist_list) < 0.80:
            return "Face already exists"
        else:
            embedding_list.append(embedding)
            name_list.append(name)
            data = [embedding_list, name_list]
            torch.save(data, 'data.pt')
            return "User registered"
    except:
        embedding_list = []
        name_list = []
        embedding_list.append(embedding)
        name_list.append(name)
        data = [embedding_list, name_list]
        torch.save(data, 'data.pt')
        return "User registered"


def match_face_login(image,name):
    image_tensor = transform(image)
    embedding = resnet(image_tensor.unsqueeze(0)).detach()
    try:
        saved_data = torch.load('data.pt')
        embedding_list = saved_data[0] 
        name_list = saved_data[1] 
        idx = name_list.index(name)
        if torch.dist(embedding,embedding_list[idx]).item()<0.80:
            return "User matched"
        else:
            return "Face does not match"
    except:
        return "No registered user"

def image_handler(image, user_name, flag):
    faces, probs = mtcnn(image, return_prob=True)
    for face, prob in zip(faces, probs):
        if prob<0.80:
            faces.remove(face)
    if faces==None:
        return "No face detected"
    elif faces.shape[0]>1:
        return "Multiple faces detected"
    face = faces[0]
    fname = 'temp.png'
    img = face.permute(1, 2, 0).int().numpy().astype('uint8')
    plt.imsave(fname, img)
    face_image = Image.open(fname)
    image_tensor = return_image_tensor(face_image)
    image_tensor = image_tensor.unsqueeze(0)
    output = model(image_tensor)
    _,pred_t = torch.max(output, dim=1)
    if(pred_t==0):
        if flag=="register":
            status = match_face_register(face_image,user_name)
            return status
        else:
            status = match_face_login(face_image,user_name)
            return status
    else:
        return "Fake Face Detected"

img = Image.open()
status = image_handler(img,"","login")