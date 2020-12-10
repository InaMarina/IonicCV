import React from 'react';
//import core components
import { 
  IonButton, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonLabel, 
  IonPage, 
  IonText, 
  IonTitle, 
  IonToolbar} 
  from '@ionic/react';
//Importing icons
import { logoGithub, logoLinkedin } from 'ionicons/icons';
//Import own components
import MenuButton from '../components/MenuButton'
import Menu from '../components/Menu'
//Style
import './Contact.css';

//Contact page - simple card with text and buttons with external links to linkedin & github
const Contact: React.FC = () => {
  return (
    <>
    <Menu />
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <MenuButton />
          <IonTitle>Contact</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
        <IonCardHeader >
            <IonCardTitle class="spacing">Don't hesitate to contact me if you are looking for a developer!</IonCardTitle>
            <IonCardSubtitle class="spacing">I'm currently employed, but I'm always intersted in new opportunities.</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent class="spacingContent">
            <IonText>You can email me at:</IonText>
            <br/>
            <IonText color="primary">marina.jarvinen@student.laurea.fi </IonText>
            <br/>
            <br/>
            <IonText>Or contact me through GitHub or LinkedIn:</IonText>
            <br/>
            <br/>
            <IonButton class="spacing"
              expand="block" 
              fill="outline" 
              onClick={()=> {window.open('https://github.com/InaMarina', '_system')}}>
              <IonIcon icon={logoGithub} size="large"></IonIcon>
              <IonLabel class="label">
                My GitHub
              </IonLabel>
            </IonButton>   

            <IonButton 
              expand="block" 
              fill="outline" 
              onClick={()=> {window.open('https://www.linkedin.com/in/marina-j%C3%A4rvinen-profile/', '_system')}}>
              <IonIcon icon={logoLinkedin} size="large"></IonIcon>
              <IonLabel class="label">
               My LinkedIn
              </IonLabel>
            </IonButton>   
        </IonCardContent>
        </IonCard>
 
      </IonContent>
    </IonPage>
    </>
  );
};

export default Contact;
