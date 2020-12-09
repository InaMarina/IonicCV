import React from 'react';
import { IonButtons,IonMenuButton } from '@ionic/react';

const MenuButton: React.FC = () => {
    return (
      <>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
      </>
    )}

    export default MenuButton;