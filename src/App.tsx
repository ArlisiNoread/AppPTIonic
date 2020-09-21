import React, { useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { calculatorOutline, podiumOutline, helpCircleOutline, informationCircle, checkmarkOutline } from 'ionicons/icons';
import { makeStyles } from '@material-ui/core/styles';


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

import Calculadora from './pages/Calculadora'
import Historial from './pages/Historial'
import Ayuda from './pages/Ayuda'
import Algoritmo from './algoritmo/Algoritmo'
import Resultado from './pages/Resultado'
import "animate.css"


const useStyles = makeStyles((theme) => ({
  colorIcon: {
    color: "black"
  },
  tab1: {
    backgroundColor: "#74c044"
  },
  tab2: {
    backgroundColor: "#1a88b4"
  },
  tab3: {
    backgroundColor: "#c84c29"
  }
}));



const App: React.FC = () => {
  const classes = useStyles();
  const [resultado, setResultado] = React.useState([])
  const [badgeActivado, setBadgeActivado] = React.useState(false);
  const algoritmo = new Algoritmo();
  algoritmo.asociarResultadoConApp(setResultado);
  
  useEffect(
    () =>{
      if(resultado.length > 0)setBadgeActivado(true)
    }
  ,[resultado]);


  const badge = (
    <IonBadge>
      <IonIcon icon={checkmarkOutline} />
    </IonBadge>
  );
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs >
          <IonRouterOutlet>
            <Route path="/calculadora" exact={true}>
              <Calculadora algoritmo={algoritmo}></Calculadora>
            </Route>
            <Route path="/historial" exact={true}>
              <Historial test={"test"}></Historial>
            </Route>
            <Route path="/ayuda" exact={true}>
              <Ayuda test={"test"}></Ayuda>
            </Route>
            <Route path="/resultado" exact={true}>
              <Resultado></Resultado>
            </Route>
            <Route path="/" render={() => <Redirect to="/calculadora" />} exact={true} />
          </IonRouterOutlet>

          {/* Barra navegación */}
          <IonTabBar className={classes.colorIcon} slot="bottom">
            <IonTabButton className={classes.tab1} tab="schedule" href="/calculadora" >
              <IonIcon icon={calculatorOutline} />
              <IonLabel>Calculadora</IonLabel>
              {(badgeActivado)?badge:""}
            </IonTabButton>
            <IonTabButton className={classes.tab2} tab="speakers" href="/historial">
              <IonIcon icon={podiumOutline} />
              <IonLabel>Historial</IonLabel>
            </IonTabButton>
            <IonTabButton className={classes.tab3} tab="map" href="/ayuda">
              <IonIcon icon={helpCircleOutline} />
              <IonLabel>Ayuda</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );

};

export default App;
