import React from 'react'
import './css/Gallery.css' 
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around', 
    alignItems: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop: 50,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));



const tileData = [
    {
      img: 'https://i.wpimg.pl/730x0/m.fitness.wp.pl/4-ea52435acc6cf488e05e75c209b2bd.jpg',
      title: 'Pudzianowski',
      author: 'Internet',
    },
    {
      img: 'https://cdn.galleries.smcloud.net/t/galleries/gf-afAR-BmSs-Yp7T_jak-zmieniali-sie-sportowcy-mariusz-pudzianowski-664x0-nocrop.jpg',
      title: 'Mariusz P',
      author: 'Internet',
    },
  ];

  function getSteps() {
    return ['Bądź jak pudzian!', 'Krok pierwszy', 'Krok drugi'];
  }
  
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Aby wyglądać jak pudzian...';
      case 1:
        return 'Ćwicz ciężko jak on';
      case 2:
        return 'Jedz tyle co on ';
      default:
        return 'Unknown stepIndex';
    }
  }


export default function Gallery() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        
        {tileData.map((tile) => (
         
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          
        ))}
      </GridList>

     <div className="doGory">
      
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
