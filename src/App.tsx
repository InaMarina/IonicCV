import React, {useState, useEffect} from 'react';

//Importing getUser function
import {getUser} from './firebaseConfig'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

//importing navigations
import AppStack from './navigation/AppStack';
import AuthStack from './navigation/AuthStack';

const App: React.FC = () => {

  const [user, setUser] = useState(false)

  useEffect(() => {
    getUser().then(user => {
      if (user !== null){
        setUser(true)
        console.log(user)
      } else {
        setUser(false)
        console.log(user)
      }
    })
  }, [])
  console.log(user)

  //Conditionally render depending on if user is true or not
  return (
    <>
      {user ? <AppStack /> : <AuthStack />}
    </>

  );
}

export default App;
