import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Projects.css';

import MenuButton from '../components/MenuButton'
import Menu from '../components/Menu'

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
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Projects</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
    </>
  );
};

export default Projects;
