import React from 'react';
//Import core components
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonImg, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent } 
  from '@ionic/react';
//Import Style
import './Education.css';
//Import own components
import MenuButton from '../components/MenuButton'
import Menu from '../components/Menu'
//Import pictures
import uni from '../assets/uni.png'
import axxell from '../assets/axxell.png'
import arcada from '../assets/arcada.png'

//Cards that present education: Logo of school, title of study + description
const Education: React.FC = () => {
  return (
    <>
    <Menu />
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <MenuButton />
          <IonTitle>Education</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonCard>
        <IonImg src={'https://www.laurea.fi/globalassets/logot/laurea/laurea-vaakalogo_rgb.png'} />
          <IonCardHeader>
            <IonCardTitle>Business Information Technology </IonCardTitle>
            <IonCardSubtitle>Aug 2019 - Dec 2021</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            This degree is a combination of information technology
            and business management expertise
            Orientation: Web and Mobile Development
        </IonCardContent>
        </IonCard>
        <IonCard>
        <IonImg src={uni} />
          <IonCardHeader>
            <IonCardTitle>Computer science</IonCardTitle>
            <IonCardSubtitle>Aug 2018 - Nov 2020</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            I have studied 20 ECTS of subject studies in computer
            science in the Helsinki Open University.
        </IonCardContent>
        </IonCard>
        <IonCard>
        <IonImg src={axxell} />
          <IonCardHeader>
            <IonCardTitle>Gardener</IonCardTitle>
            <IonCardSubtitle>Aug 2015 - Nov 2017</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Undergraduate degree in horticulture
        </IonCardContent>
        </IonCard>
        <IonCard>
        <IonImg src={arcada} />
          <IonCardHeader>
            <IonCardTitle>Cultural Management</IonCardTitle>
            <IonCardSubtitle>Aug 2011 - Nov 2013 </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            I studied 86/210 ECTS of the Cultural Management degree
            These studies gave me good competencies in project
            work, organizational skills and a broad understanding of
            culture and art
        </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
    </>
  );
};

export default Education;
