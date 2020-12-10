import React from 'react';
//Importing core components
import { IonButton, IonMenu, IonList, IonItem,IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuToggle,} from '@ionic/react';
//Importing Icons
import { codeDownloadOutline, personCircleOutline, schoolOutline, bagCheckOutline, barbellOutline, paperPlaneOutline } from 'ionicons/icons';
//Importing logoutfunction from config-file
import {logout} from '../firebaseConfig'
//style
import './Menu.css';


const Menu:  React.FC = () => {

  //Logout function that is launched by logout-button in side menu  
    const logOutUser = async() => {
        const response = await logout()
        if(response){
          //toast('Logout successfull')
          window.location.href = '/' // send the user to login page
        } else {
          //toast('Something went wrong')
        }
      }

    return(
      <>    
      <IonMenu side="start" contentId="content" >
      <IonHeader>
        <IonToolbar >
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id="content">
        <IonList>
          <IonMenuToggle>
          <IonItem>
            <IonIcon icon={personCircleOutline} size="large"></IonIcon>
            <IonButton class="buttonItem" fill="clear" expand="block" routerLink="/profile">
              Profile
            </IonButton>
          </IonItem>
          <IonItem>
          <IonIcon icon={schoolOutline} size="large"></IonIcon>
            <IonButton class="buttonItem" fill="clear" routerLink="/education">
              Education
            </IonButton>
          </IonItem>
          <IonItem>
          <IonIcon icon={bagCheckOutline} size="large"></IonIcon>
            <IonButton class="buttonItem" fill="clear" routerLink="/workexperience">
              Work Experience
            </IonButton>
          </IonItem>
          <IonItem>
          <IonIcon icon={barbellOutline} size="large"></IonIcon>
            <IonButton class="buttonItem" fill="clear" routerLink="/skills">
              Skills
            </IonButton>
          </IonItem>
          <IonItem>
          <IonIcon icon={codeDownloadOutline} size="large"></IonIcon>
            <IonButton class="buttonItem" fill="clear" routerLink="/projects">
              Projects
            </IonButton>
          </IonItem>
          <IonItem>
          <IonIcon icon={paperPlaneOutline} size="large"></IonIcon>
            <IonButton class="buttonItem" fill="clear" routerLink="/contact">
              Contact
            </IonButton>
          </IonItem>
          </IonMenuToggle>
        </IonList>
        <IonButton class="logOutItem" expand="full" onClick={logOutUser}>
          LOG OUT
        </IonButton>
      </IonContent>
    </IonMenu>
    </>
)}

export default Menu;