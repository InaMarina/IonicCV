import React from 'react';
//Import core components
import { IonButtons, IonMenuButton } from '@ionic/react';

//Menu button - this is added to toolbars at every page. Opens side menu.
const MenuButton: React.FC = () => {
    return (
      <>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
      </>
    )}

    export default MenuButton;