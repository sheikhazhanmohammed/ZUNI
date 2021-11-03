import React from 'react'
import Card from './Card'

function About() {
    return (

            <main id='about'>
            <div className="left">
                <h1>Introduction</h1>
                <br />
                <div>
                    In recent times face biometric security systems are rapidly increasing for both web and mobile applications. This has also led to an increase in cyber-attacks where attackers use certain presentation attacks and instruments to gain unauthorized access into a user's account. To counter this, we bring before you Zillion Utility purpose Neural authentication Interface or as we like to call it ZUNI. Our interface comes with a face spoof detection system, which can recognize:
                    <br />
                    <ul>
                        <li>Printed face attack</li>
                        <li>Face being showed on a device's screen</li>
                        <li>Multiple faces</li>
                    </ul>
                    <br />
                </div>
                <div>
                    In case any one of the above attacks is detected, the system disrupts the login process and the user needs to start again. Since ZUNI captures images in real-time, using 3D-Mask Generation techniques will not work hence it renders the deepfake methods useless. ZUNI can be built on top of any face biometric authentication system to detect attacks. For the demonstration purpose, we build ZUNI over a face matcher which returns a User's Registered Name, in case a real user tries to login, in case an attack is detected, the user is returned to login screen with a warning. We have also added a registration portal, where users can register using their real faces, in case a spoof face is detected during the registration process, the user is returned to the registration screen with a warning.
                </div>

            </div>
            <div className="right">
                <h1>Meet the developers</h1>

                <Card name='Azhan Mohammed' 
                    g_username="sheikhazhanmohammed" g_link="https://github.com/sheikhazhanmohammed"
                    l_link="https://www.linkedin.com/in/azhanmohammed/" l_username="azhanmohammed"
                     src="https://drive.google.com/uc?export=view&id=1M1EuafAGKpVtIPOup799dQMkKnszvSyS" />
                <Card name='Mohammad Abaas Ansari' 
                    g_username="m-abbas-ansari" g_link="https://github.com/m-abbas-ansari"
                    l_link="https://www.linkedin.com/in/abbas-ansari-2001/" l_username="abbas-ansari-2001"
                     src="https://drive.google.com/uc?export=view&id=1v3nAv-3GT6qB_tfOfwoo7t6bgqgt_Hw8" />
                <Card name='MD Rashid Hussain' 
                    g_username="m3rashid" g_link="https://github.com/m3rashid" 
                    l_link="https://www.linkedin.com/in/m3rashid/" l_username="m3rashid"
                    src="https://drive.google.com/uc?export=view&id=1I-K_HRV2Y8ulbWCAZ8X8ifomyEUN84he" />
            </div>
            
        </main>
    )
}

export default About
