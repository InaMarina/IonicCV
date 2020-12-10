//import react and hooks
import React, {useState, useEffect} from 'react';
//Import core components
import { 
  IonContent, 
  IonImg, 
  IonItem, 
  IonInput, 
  IonButton, 
  IonPage, 
  IonLoading, 
  IonText, 
  IonCard } 
  from '@ionic/react';
//import getuser and registert functions from config file
import {getUser, register} from '../firebaseConfig'
//import toast to be used in validation
import {toast} from '../components/toast'
//style
import './Register.css'
//import picture
import logo from '../assets/logo1.png'


  //Renders input fiels for email & password, sets them to state hooks and when button is pressed
  //launches register. If something goes wrong a toast (in original function in config file) will show error.
  //login button takes user to login page
const Register: React.FC = () => {

  //state hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const [isAuthed, setIsAuthed] = useState(false)

  // useEffect function that checks if user is already logged in
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

  //Signup function checks that there is something written in input fields and if is
  //then register (from config-file) is launched with data from hooks
  const signup = async() => {
    setLoading(true)
    if(email.trim() === '' || password.trim() === '') {
    toast('Email and password are required')
    }
    const response = await register(email, password)
    if(response) {
      window.location.href = '/profile' 
    }
    setLoading(false)
  }

  //Renders input fiels for email & password, sets them to state hooks and when button is pressed
  //launches signup. If something goes wrong a toast (in original function in config file) will show error.
  //login button takes user to login page
  return (
    <IonPage>
      <IonLoading message={'Just a sec..'} duration={0} isOpen={loading}></IonLoading>
      <IonContent fullscreen>
      <IonImg class="imageRegister" src={logo} />
        <IonCard>
        <IonItem>
            <IonInput placeholder="Email" onIonChange={(e: any) => setEmail(e.detail.value)} ></IonInput>
        </IonItem>
        <IonItem>
            <IonInput type="password" placeholder="Password" onIonChange={(e: any) => setPassword(e.detail.value)} ></IonInput>
        </IonItem>
        <IonButton color="tertiary" onClick={signup}>Register</IonButton>
        </IonCard>
        <IonText class="centerSignup">Already Signed Up?</IonText>
        <IonButton expand="block" routerLink="/login">Back to Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Register;
