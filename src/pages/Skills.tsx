import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import MenuButton from '../components/MenuButton'
import Menu from '../components/Menu'

import './Skills.css';

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
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Skills</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Skills page" />
      </IonContent>
    </IonPage>
    </>
  );
};

export default Skills;