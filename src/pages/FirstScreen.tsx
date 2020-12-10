import React from 'react';
//imports for core components
import { 
  IonButton,  
  IonContent, 
  IonPage, 
  IonImg, 
  IonGrid, 
  IonText, 
} from '@ionic/react';
//import style
import './FirstScreen.css'
//Import picture
import logo from '../assets/logo1.png'

//FirstScreen component: logopicture + button with navigation to login page 
//and button with navigation to register page
const FirstScreen: React.FC = () => {
  
    return (
      <IonPage>
        <IonContent fullscreen >
        <IonGrid>
          <IonImg class="imageFirstscreen" src={logo} />
        </IonGrid>
        <IonGrid class="text">
          <IonText>Welcome to the CV of one future superstar developer. 
            You need to Sign In to view the content. If you are here for the first time, please register.</IonText>
        </IonGrid>
        <IonGrid class="buttons">
           <IonButton  expand="block" routerLink="/login">Login</IonButton>
           <IonButton expand="block" routerLink="/register">Register</IonButton>
        </IonGrid>
       </IonContent>
      </IonPage>
    );
  };
  
  export default FirstScreen;