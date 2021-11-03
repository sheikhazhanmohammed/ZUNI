<div align="center">
  <h3>Zillion Utility purpose Neural authentication Interface: ZUNI</h3>
</div>

#### Introduction
In recent times face biometric security systems are rapidly increasing for both web and mobile applicaitons. This has also led to an increase in cyber attacks where attackers use certain presentation attacks and instruments to gain illegal access into a user's account. To counter this, we bring before you **Zillion Utility purpose Neural authenticatin Interface** or as we like to call it **ZUNI**. Our interface comes with a face spoof detection system, which can recognize:
- Printed face attack
- Face being showed on a device's screen 
- Multiple faces
-  
<div align="center">
  <img src="images\printed-face-attack.png" width="400" height="400"/>
  <p align="center">Printed Face Attack</p>
  <img src="images\face-on-screen-attack.png" width="400" height="400"/>
  <p align="center">Face on Screen attack</p>
</div>
In case any of the above attacks is detected, the system distrupts the login process and the user needs to start again. Since ZUNI captures images in real time, using 3D-Mask Generation techniques will not work hence it renders the deepfake methods useless. ZUNI can be built on top of any face biometric authentication system to detect attacks. For demonstration purpose, we build ZUNI over a face matcher which returns a User's Registered Name, in case a real user tries to login, in case an attack is detected, the user is returned back to login screen with a warning. We have also added a registeration portal, where users can register using their real faces, in case a spoof face is detected during registration process, the user is returned back to registration screen with a warning.
