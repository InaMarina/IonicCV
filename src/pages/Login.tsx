//Importing react + react hooks
import React, { useEffect, useState} from 'react';
//Importing core components
import { 
  IonContent, 
  IonImg, 
  IonItem, 
  IonButton, 
  IonInput, 
  IonPage,  
  IonText, 
  IonCard, 
  IonLoading } 
  from '@ionic/react';
//Importing functions from config file
import {login, getUser} from '../firebaseConfig'
//Style
import './Login.css'
//Importing logopicture
import logo from '../assets/logo1.png'

const Login: React.FC = () => {

  //StateHooks
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthed, setIsAuthed] = useState(false)

  //useEffect function that checks if user is already logged in
  //if true -> redirect to profile
  useEffect(() => {
    setLoading(true)
    getUser().then(user => {
      if (user !== null){
        setIsAuthed(true)
        console.log(user)
      } else {
        setIsAuthed(false)
        console.log(user)
      }
      setLoading(false)
    })
  }, [])
  console.log(isAuthed)
  if(isAuthed === true){
    window.location.href = '/profile' 
  } 

  //Function for login that uses the login-function imported from config-file
  //When async returns and if true, redirects to profile
  const loginUser = async() => {
    setLoading(true)
    const response = await login(email, password)
    if(response){
      window.location.href = '/profile' 
    }
    setLoading(false)
  }

  //Renders input fiels for email & password, sets them to state hooks and when button is pressed
  //launches login. If something goes wrong a toast (in original function in config file) will show error.
  //register button takes user to register page
  return (
    <IonPage>
      <IonLoading message={'Just a sec..'} duration={0} isOpen={loading}></IonLoading>
      <IonContent fullscreen>
      <IonImg class="imageRegister" src={logo} />
          <IonCard>
            <IonItem>
              <IonInput placeholder="email" onIonChange={(e: any) => setEmail(e.detail.value)} ></IonInput>
           </IonItem>
           <IonItem>
              <IonInput type="password" placeholder="Password" onIonChange={(e: any) => setPassword(e.detail.value)} ></IonInput>
           </IonItem>
           <IonButton onClick={loginUser}>Login</IonButton>
          </IonCard>
        <IonText class="centerLogin">Not yet Signed Up?</IonText>
        <IonButton expand="block" routerLink="/register">Register</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
