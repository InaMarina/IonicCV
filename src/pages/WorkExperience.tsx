import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonItemDivider, IonLabel, IonList, IonListHeader, IonNote, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';

//Import own components
import Menu from '../components/Menu'
import MenuButton from '../components/MenuButton';
//Import style
import './WorkExperience.css';

const WorkExperience: React.FC = () => {
  return (
    <>
    <Menu />
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <MenuButton />
          <IonTitle>Work Experience</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <IonCard>
          <IonCardHeader>
            <IonCardTitle>Nanny</IonCardTitle>
            <IonCardSubtitle>Family Hammarén</IonCardSubtitle>
            <IonCardSubtitle>Aug 2013 - Aug 2020</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          My main duty was to take care of my employers daughter
          and dogs.
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Gardener</IonCardTitle>
          <IonCardSubtitle>Överby Trädgårdsbutik</IonCardSubtitle>
          <IonCardSubtitle>04/2018-07/2018 &  05/2017-09/2018</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          I worked as a gardener in a garden shop during the
          summer seasons of 2017 & 2018.
          My main responsibilities were customer service, sales and
          taking care of the shop and plants.
        </IonCardContent>
      </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Greenhouse gardener</IonCardTitle>
            <IonCardSubtitle>Axxell Överby oy</IonCardSubtitle>
            <IonCardSubtitle>05/2016-08/2016</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            I worked the summerseason of 2016 in agreenhouse as a
            gardener. My main duties included taking care of tomato
            plants and seasonal flowers.
        </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Festival Producer</IonCardTitle>
            <IonCardSubtitle>Wibes Festival</IonCardSubtitle>
            <IonCardSubtitle>01/2015-10/2015</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            My main area of responsibility was the financing and
            coordination of the festival.
        </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Freelance Event Producer</IonCardTitle>
            <IonCardSubtitle>Freelancer</IonCardSubtitle>
            <IonCardSubtitle> 01/2012-10/2014</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            I worked in several different event productions ranging
            from club nights to festivals.
            My responsibilities included financing, coordinating,
            organizing staff etc.
        </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Nanny</IonCardTitle>
            <IonCardSubtitle>Daghemmet Lyckoslanten</IonCardSubtitle>
            <IonCardSubtitle>10/2010-06/2011</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            I worked as a nanny in a daycare center.
            My main duties were to work with children aged 3-6 in a
            bilingual group.
        </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
    </>
  );
};

export default WorkExperience;
