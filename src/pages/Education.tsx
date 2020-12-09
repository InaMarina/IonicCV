import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Education.css';

import MenuButton from '../components/MenuButton'
import Menu from '../components/Menu'

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
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Education</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Education page" />
      </IonContent>
    </IonPage>
    </>
  );
};

export default Education;
