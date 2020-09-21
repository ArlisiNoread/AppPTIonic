import React, { useState, FunctionComponent } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import PropTypes, { InferProps } from "prop-types";
import Algoritmo from '../algoritmo/Algoritmo';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

const useStyles = makeStyles((theme) => ({
  centerDiv:{
    textAlign: "center"
  },
  paddingsMainCalculadora:{
    padding: "10px 10px 10px 10px"
  },
  desplegado: { 
    backgroundColor: "white", 
    zIndex: 100, 
    height: "100%", 
    width: "100%", 
    position: "fixed"
  },
  escondido: { 
    backgroundColor: "white", 
    zIndex: 100, 
    height: "100%", 
    width: "100%", 
    position: "fixed"
  },
  labelRoot: {
    fontSize: 12,
    
    "&$labelFocused": {
      color: "black"
    }
  },
  labelFocused: {
    fontSize: 14
  },
  colorTitle:{
    backgroundColor: "#74c044"
  },
  ionTab1:{
    '--ion-color-base': 'var(--ion-color-tab1)'
  }

}));


interface ContainerProps {
  algoritmo: Algoritmo
}

const Calculadora: React.FC<ContainerProps> = ({ algoritmo }: ContainerProps) => {
  const classes = useStyles();

  return (
    <IonPage >
      <IonHeader  style={{zIndex:300}}>
        <IonToolbar color="tabcalc">
          <IonTitle>Calculadora</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
        <CalculadoraContenido algoritmo = {algoritmo}/>
      </IonContent>
    </IonPage>
  );
};

const CalculadoraContenido: React.FC<ContainerProps> = ({ algoritmo }: ContainerProps) => {
  

  const classes = useStyles();


  const [state, setState] = React.useState({
  checkedA: true,
  checkedB: true,
  checkedC: true,
  });

  const handleChange = (event:any) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  return (
  <div>

  
    <ModalBusqueda algoritmo={algoritmo}/>
    

    <Grid container justify="center" alignItems="center" className={classes.paddingsMainCalculadora} spacing={1} style={{zIndex: 100}}>
      <Grid item xs={12} className={classes.centerDiv}>
        <p  id="outlined-basic" style={{margin: '1px'}}>
          Ingrese los datos solicitados
        </p>
      </Grid>
      <Grid item xs={6} className={classes.centerDiv}>
        <TextField label="Temperatura Media Anual" variant="outlined" type="number"
          InputLabelProps={{
            classes: {
              root: classes.labelRoot,
              focused: classes.labelFocused
            }
          }}
         />
      </Grid>
      <Grid item xs={6} className={classes.centerDiv}>
        <TextField label="Precipitación Media Anual" variant="outlined" type="number"
          InputLabelProps={{
          classes: {
            root: classes.labelRoot,
            focused: classes.labelFocused
          }
          }}
        />
      </Grid>
      <Grid item xs={12} className={classes.centerDiv}>
        <Button variant="contained" color="primary" style={{minWidth: "195px"}} onClick={() => {algoritmo.iniciarAlgoritmo()}}>
          Ingrese Parámetros
        </Button>     
      </Grid>
      <Grid item xs={8} className={classes.centerDiv} style={{textAlign: "right"}}>

      <p>Modificar Parámetros</p>
      </Grid>
      <Grid item xs={4} className={classes.centerDiv} style={{textAlign: "left"}}>
          <div>
            <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
          </div>
      </Grid>

      {/* Parámetros Modificables */}
      <Grid item xs={6} className={classes.centerDiv}>
        <TextField id="standard-basic" label="Compositores" value="10" type="number"/>
      </Grid>
      <Grid item xs={6} className={classes.centerDiv}>
        <TextField id="standard-basic" label="Repeticiones" value="20"/>
      </Grid>
      <Grid item xs={6} className={classes.centerDiv}>
        <TextField id="standard-basic" label="Memoria" value="5"/>
      </Grid>
      <Grid item xs={6} className={classes.centerDiv}>
        <TextField id="standard-basic" label="Pruebas" value="30"/>
      </Grid>
      <Grid item xs={6} className={classes.centerDiv}>
        <TextField id="standard-basic" label="Evaluaciones" value="5000"/>
      </Grid>
      <Grid item xs={6} className={classes.centerDiv}>
        <TextField id="standard-basic" label="IFG" value="0.1"/>
      </Grid>
      <Grid item xs={6} className={classes.centerDiv}>
        <TextField id="standard-basic" label="CFG" value="0.1"/>
      </Grid>
      <Grid item xs={6} className={classes.centerDiv}>
        <TextField id="standard-basic" label="FCLA" value="0.1"/>
      </Grid>

   </Grid>
   </div>
    
  );
}

interface AlgoritmoDatos {
  algoritmo: Algoritmo;
}

const ModalBusqueda: React.FC<AlgoritmoDatos> = ({ algoritmo }: AlgoritmoDatos) => {
  const classes = useStyles();
  var [hiloVivo, setHiloVivo] = React.useState(algoritmo.getHiloVivo());
  algoritmo.asociarSetHiloVivoModal(setHiloVivo);
  var [progreso, setProgreso] = React.useState(algoritmo.getProgreso());
  algoritmo.asociarSetProgresoModal(setProgreso);

  const escondido = {
    backgroundColor: "white", 
    zIndex: 100, 
    height: "100%", 
    width: "100%", 
    position: "fixed"
  }

  const desplegado = { 
    backgroundColor: "white", 
    zIndex: 100, 
    height: "100%", 
    width: "100%", 
    position: "fixed"
  }
 

  return(
    <div className={clsx("animate__animated", 
    classes.escondido, 
    (hiloVivo)?"animate__fadeInDown":"animate__fadeOutUp")}>
        <Grid container justify="center" alignItems="center" className={classes.paddingsMainCalculadora} spacing={1} style={{zIndex: 100, textAlign:"center"}}>
          <Grid item  xs={12}>
            <p>Realizando Análisis</p>
          </Grid>
          <Grid item xs={12} >
            <CircularProgressWithLabel value={progreso} />
          </Grid>
          <Grid item xs={12}>
            <p>Tiempo estimado: {algoritmo.getTiempoEstimado()}</p>
          </Grid>
        </Grid>

    </div>
  );
}

function CircularProgressWithLabel(props:any) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress  variant="static" {...props}  />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}


export default Calculadora;