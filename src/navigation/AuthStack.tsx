import React from 'react';
//importing nessentials for navigation
import { Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
//importing pages that are shown for unauthienticated user
import Login from '../pages/Login';
import Register from '../pages/Register';
import FirstScreen from '../pages/FirstScreen'

//navigation that is conditionally rendered in App.tsx
const AuthStack: React.FC = () => {

      return(
        <IonApp>
          <IonReactRouter>
              <IonRouterOutlet>
                <Route path="/login" component={Login} exact={true} />
                <Route path="/register" component={Register} exact={true} />
                <Route path="/" component={FirstScreen} exact={true} />
              </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
        )
};

export default AuthStack;
