import React from 'react';
//importing nessentials for navigation
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
//importing tabnavigation icons
import { codeDownloadOutline, personCircleOutline, schoolOutline, bagCheckOutline, barbellOutline, paperPlaneOutline } from 'ionicons/icons';
//importing pages that are shown for authenticated user
import Profile from '../pages/Profile';
import Education from '../pages/Education';
import WorkExperience from '../pages/WorkExperience';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

//navigation
const AppStack: React.FC = () => (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/profile" component={Profile} exact={true} />
            <Route path="/education" component={Education} exact={true} />
            <Route path="/workexperience" component={WorkExperience} exact={true}/>
            <Route path="/skills" component={Skills} exact={true} />
            <Route path="/projects" component={Projects} exact={true} />
            <Route path="/contact" component={Contact} exact={true}/>
            <Route path="/" render={() => <Redirect to="/Profile" />} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom" >
            <IonTabButton tab="Profile" href="/profile">
              <IonIcon icon={personCircleOutline} />
            </IonTabButton>
            <IonTabButton tab="Education" href="/education">
              <IonIcon icon={schoolOutline} />
            </IonTabButton>
            <IonTabButton tab="Work Experience" href="/workexperience">
              <IonIcon icon={bagCheckOutline} />
            </IonTabButton>
            <IonTabButton tab="Skills" href="/skills">
              <IonIcon icon={barbellOutline} />
            </IonTabButton>
            <IonTabButton tab="Projects" href="/projects">
              <IonIcon icon={codeDownloadOutline} />
            </IonTabButton>
            <IonTabButton tab="Contact" href="/contact">
              <IonIcon icon={paperPlaneOutline} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
  
  export default AppStack;