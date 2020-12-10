import React from 'react';
//Importing core components
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
//Importing icon
import { logoGithub } from 'ionicons/icons';

//Importing own components
import MenuButton from '../components/MenuButton'
import Menu from '../components/Menu'
//Importing pictures
import Ion1 from '../assets/project1.png'
import RN1 from '../assets/project2.png'
import Ion3 from '../assets/project3.png'
import Ion4 from '../assets/project4.png'

//Style
import './Projects.css';

//There is a github-button that opens my github externally
//I've done a card/project with a picture of the project and short description
const Projects: React.FC = () => {
  return (
    <>
    <Menu />
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <MenuButton />
          <IonTitle>Projects</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonGrid class="textProject">
        <IonRow>
          <IonText>Here are some samples of my mobile projects</IonText>
          <br />
        </IonRow>
        <IonRow>
          <IonText>Everything I've done can be found in my GitHub:</IonText>
          <br />
        </IonRow>
        <IonRow>
            <IonButton 
              expand="block" 
              fill="outline" 
              onClick={()=> {window.open('https://github.com/InaMarina', '_system')}}>
            <IonIcon icon={logoGithub} size="large"></IonIcon>
              InaMarina
            </IonButton>        
        </IonRow>
      </IonGrid>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle> Shopping List app </IonCardTitle>
          <IonCardSubtitle> made with IOnic & React, and Google Firebase as its BaaS </IonCardSubtitle>
        </IonCardHeader>        
        <IonImg src={Ion1} />
        <IonCardContent>
            This is a very basic application where the user can save his/her shoppinglist.
            It has register/login and logout, ans basic functionalities to add items to a list in one modal, 
            and show them to the user in another. Items can be added and removed.  
        </IonCardContent>
        </IonCard>
        <IonCard>
        <IonCardHeader>
          <IonCardTitle> Chat App </IonCardTitle>
          <IonCardSubtitle> made with Ionic & React, and Google Firebase as its BaaS </IonCardSubtitle>
        </IonCardHeader>        
        <IonImg src={RN1} />
        <IonCardContent>
            This is a chat application where with authentication, possibility for users to add rooms 
            and go into chosen room and send messages into the room.
        </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
    </>
  );
};

export default Projects;
