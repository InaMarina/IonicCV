import React from 'react';
//Importing core components
import {
  IonImg, 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonCardContent } 
  from '@ionic/react';
//Importing picture
import face from '../assets/face.png'
//Importing own components
import MenuButton from '../components/MenuButton'
import Menu from '../components/Menu'
//Importing style
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <>    
    <Menu />
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <MenuButton />
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonCard>
        <IonImg class="profileImage" src={face} />
          <IonCardHeader>
            <IonCardTitle> Marina Järvinen </IonCardTitle>
            <IonCardSubtitle> BIT-student</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            An ambitious and determined end-stage BIT-student with
            programming as the orientation of studies, seeking an entrylevel position to begin my career in a high-level professional
            environment. My strengths include problem solving, logic
            thinking and working hard towards goals.
        </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
    </>
  );
};

export default Profile;
