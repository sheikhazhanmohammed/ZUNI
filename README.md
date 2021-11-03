<div align="center">
  <h3>Zillion Utility purpose Neural authentication Interface: ZUNI</h3>
</div>

<p align="center">
 <a href="https://circleci.com/gh/huggingface/transformers">
        <img alt="Build" src="https://img.shields.io/badge/python-3%2B-brightgreen?logo=Python">
    </a>
    <a href="https://circleci.com/gh/huggingface/transformers">
        <img alt="Build" src="https://img.shields.io/badge/git-2.29.2-brightgreen?logo=git">
    </a>
    <a href="https://circleci.com/gh/huggingface/transformers">
        <img alt="Heroku" src="http://img.shields.io/static/v1?label=Pytorch&message=1.6.0&color=brightgreen&logo=Pytorch">
    </a>
    <a href="https://circleci.com/gh/huggingface/transformers">
        <img alt="Heroku" src="http://img.shields.io/static/v1?label=Flask&message=1.1.1&color=brightgreen&logo=Flask">
    </a>
 <a href="https://circleci.com/gh/huggingface/transformers">
        <img alt="Build" src="https://img.shields.io/badge/React-17.0.1-brightgreen?logo=React">
    </a>
    <a href="https://circleci.com/gh/huggingface/transformers">
        <img alt="Heroku" src="http://img.shields.io/static/v1?label=react-router-dom&message=5.2.0&color=brightgreen&logo=ReactRouter">
    </a>
    <a href="https://circleci.com/gh/huggingface/transformers">
        <img alt="Heroku" src="http://img.shields.io/static/v1?label=React-Bootstrap&message=1.4.0&color=brightgreen&logo=Bootstrap">
    </a>
</p>

#### Introduction
In recent times face biometric security systems are rapidly increasing for both web and mobile applicaitons. This has also led to an increase in cyber attacks where attackers use certain presentation attacks and instruments to gain illegal access into a user's account. To counter this, we bring before you **Zillion Utility purpose Neural authenticatin Interface** or as we like to call it **ZUNI**. Our interface comes with a face spoof detection system, which can recognize:
- Printed face attack
- Face being showed on a device's screen 
- Multiple faces

<div align="center">
  <img src="images\printed-face-attack.png" width="400" height="400"/>
  <p align="center">Printed Face Attack</p>
  <img src="images\face-on-screen-attack.png" width="400" height="400"/>
  <p align="center">Face on Screen attack</p>
</div>
In case any of the above attacks is detected, the system distrupts the login process and the user needs to start again. Since ZUNI captures images in real time, using 3D-Mask Generation techniques will not work hence it renders the deepfake methods useless. ZUNI can be built on top of any face biometric authentication system to detect attacks. For demonstration purpose, we build ZUNI over a face matcher which returns a User's Registered Name, in case a real user tries to login, in case an attack is detected, the user is returned back to login screen with a warning. We have also added a registeration portal, where users can register using their real faces, in case a spoof face is detected during registration process, the user is returned back to registration screen with a warning.

#### Running the application
Given the size of model, deploying it on free web services was not possible. So we demonstrate how to deploy the service on a local machine. You can also check how to deploy deep learning models built using PyTorch in this repository [Transfer Learning Model hosted on Heroku using React & Flask](https://github.com/sheikhazhanmohammed/Transfer-Learning-Model-hosted-on-Heroku-using-React-Flask). To reproduce this respository's result on a local machine, follow the given instructions:
```
python3 -m venv pytorch-application
source pytorch-application/bin/activate
git clone https://github.com/sheikhazhanmohammed/ZUNI
cd ZUNI
sudo pip install -r requirements.txt
python3 app.py
```
The above set of commands initiates the Flask application. We now need to initiate the React Frontend, make sure you have node installed on your local machine before proceeding. To do this, open a new terminal in the ZUNI folder, and follow these instructions:
```
cd react-frontend
npm i
npm start
```
This will open a browser window in your default web browser. You can view a sample demonstration in the Demo tab.

#### Credits
We would like to thank the Meta Platforms Inc. for their open source libraries PyTorch and React which helped us to create this project. We would also love to thank Tim Esler and his team for open-sourcing the facenet-pytorch repository which helped us to get a facial matcher and facial extraction neural network.

#### Appendix
Link to Colab Notebook: https://colab.research.google.com/drive/1MQurhePx6H_nC3w071X9GRDMfpPUPfJ6?usp=sharing
Link to Trained Model pt file: https://drive.google.com/file/d/13daEooUmdQ5v2kFojwQv7n81hBO6SjyB/view?usp=sharing
Link to Complete Dataset: https://drive.google.com/drive/folders/1p8iXUQmCifrnoAWexpvOsxxUZe3brz2B?usp=sharing