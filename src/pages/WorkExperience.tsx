import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Menu from '../components/Menu'
import MenuButton from '../components/MenuButton';

import './WorkExperience.css';

const WorkExperience: React.FC = () => {
  return (
    <>
    <Menu />
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <MenuButton />
          <IonTitle>WorkExperience</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">WorkExperience</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="WorkExperience page" />
      </IonContent>
    </IonPage>
    </>
  );
};

export default WorkExperience;
