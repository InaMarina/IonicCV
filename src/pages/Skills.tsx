import React from 'react';
//Import ionic core components
import { 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonContent, 
  IonHeader, 
  IonImg, 
  IonPage, 
  IonTitle, 
  IonToolbar } 
  from '@ionic/react';
//Import own components
import MenuButton from '../components/MenuButton'
import Menu from '../components/Menu'
//Import pictures
import techskills from '../assets/techskills.png'
import softskills from '../assets/softskills.png'
import languages from '../assets/languages.png'

//Import style
import './Skills.css';

//Shows who cards, one contain picture of softskills one of techskills and languages
const Skills: React.FC = () => {
  return (
    <>
    <Menu />
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <MenuButton />
          <IonTitle>Skills</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonCard>
          <IonCardHeader>
            <IonCardTitle>Technical skills</IonCardTitle>
          </IonCardHeader>
          <IonImg src={techskills} />
          <IonCardContent>
        </IonCardContent>
      </IonCard>
      <IonCard>
          <IonCardHeader>
            <IonCardTitle>Soft skills</IonCardTitle>
          </IonCardHeader>
          <IonImg src={softskills} />
          <IonCardContent>
        </IonCardContent>
      </IonCard>
      <IonCard>
          <IonCardHeader>
            <IonCardTitle>Languages</IonCardTitle>
          </IonCardHeader>
          <IonImg src={languages} />
          <IonCardSubtitle>
            Finnish: Fluent 
            </IonCardSubtitle>
            <IonCardSubtitle>
            Swedish: Fluent
            </IonCardSubtitle>
            <IonCardSubtitle>
            English: Fluent
          </IonCardSubtitle>
      </IonCard>
      </IonContent>
    </IonPage>
    </>
  );
};

export default Skills;