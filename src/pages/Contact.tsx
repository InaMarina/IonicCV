import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons,IonMenuButton } from '@ionic/react';
import './Contact.css';

import MenuButton from '../components/MenuButton'
import Menu from '../components/Menu'

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
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contact</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
    </>
  );
};

export default Contact;
