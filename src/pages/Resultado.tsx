import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import semifrioSeco1 from '../img/semifrio-seco1.png';
import semifrioSeco2 from '../img/semifrio-seco2.png';
import semifrioSeco3 from '../img/semifrio-seco3.png';
import semifrioSeco4 from '../img/semifrio-seco3.png';


interface ContainerProps {
  test?: string
}


const Resultado: React.FC<ContainerProps> = ({ test }: ContainerProps) => {
  return (
    <IonPage >
      <IonHeader >
        <IonToolbar color="medium">
          <IonTitle>Resultado</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
        <ResultadoContenido />
      </IonContent>
    </IonPage>
  );
};


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));



interface ResultadoContainer {

}
const ResultadoContenido: React.FC = () => {
  const resultado = [0, 0, 0, 0, 0, 0]
  const classes = useStyles();
  const [cajon, setCajon] = React.useState(false);
  const [cardContentCarrousel, setCardContentCarrousel] = React.useState(0);

  const [expanded, setExpanded] = React.useState(false);
  const [expanded1, setExpanded1] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpand1Click = () => {
    setExpanded1(!expanded1);
  };

  const carrousel = [
    <CardContentFragment
      className={classes.media}
      image={semifrioSeco1}
      title="semifrioSeco1"
    />,
    <CardContentFragment
      className={classes.media}
      image={semifrioSeco2}
      title="semifrioSeco2"
    />,
    <CardContentFragment
      className={classes.media}
      image={semifrioSeco3}
      title="semifrioSeco3"
    />,
    <CardContentFragment
      className={classes.media}
      image={semifrioSeco4}
      title="semifrioSeco4"
    />
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (cardContentCarrousel + 1 < carrousel.length) {
        setCardContentCarrousel(cardContentCarrousel + 1);
      } else {
        setCardContentCarrousel(0);
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [cardContentCarrousel]);

  return (
    <div style={{ textAlign: "center" }}>
      <Card className={classes.root} style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto" }}>
        <CardHeader

          title="Bioclima semifrío seco"
        />

        {carrousel[cardContentCarrousel]}

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Información Principal bioclima semifrío seco
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Podemos encontrar en este bioclima ciudades como : Zacatecas, Tulancingo, Pachuca, Tizayuca, Tlaxcala, Puebla.
          </Typography>
            <Typography>
              Información de bioclima opcional.
          </Typography>
          </CardContent>
        </Collapse>
      </Card>

      {/* Segunda Tarjeta */}

      <Card className={classes.root} style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto" }}>
        <CardHeader
          title="Materiales para muros"
        />


        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Alta densidad
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Materiales densos y masivos
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded1,
            })}
            onClick={handleExpand1Click}
            aria-expanded={expanded1}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded1} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Poliestireno expandido, poliestireno extruido, lana mineral, lana de roca, lana de vidrio, poliuretano, corcho, celulosa, lana de oveja, arlita, poliestireno, minerales vegetales como perlita, vermiculita, adobe, fibra de vidrio, cob y pajareque, archilla expandida, tapia, algodón, perlón, paja, madera, muros gruesos, piedra, granito.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

    </div>
  );
}


interface CardContentFragmentParams {
  className: string,
  image: string,
  title: string
}
const CardContentFragment: React.FC<CardContentFragmentParams> = ({ className, image, title }: CardContentFragmentParams) => {
  const classes = useStyles();
  return (
    <div>
      <CardMedia
        className={className}
        image={image}
        title={title}
      />
    </div>
  );
}


export default Resultado;