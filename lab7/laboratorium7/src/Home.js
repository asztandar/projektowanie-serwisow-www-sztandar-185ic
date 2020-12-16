import React from 'react'
import Container from '@material-ui/core/Container';
import { Avatar } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './css/Home.css';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));

export default function Home(){ 
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return(
        <Container maxWidth="sm" className="Home-Container">
            <Avatar className="Avatar" alt="Remy Sharp" src="https://fwcdn.pl/ppo/33/93/183393/422546.1.jpg" />
            <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                Kim jest Pudzian?
            </Button>
            <Popover 
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                > 
                <Typography className={classes.typography} class="Home-Popover-text">
                    Mariusz Zbigniew Pudzianowski – polski zawodnik mieszanych sztuk walki,<br />
                    wcześniej utytułowany strongman i rugbysta. Ośmiokrotny Mistrz Polski Strongman. <br />
                    Sześciokrotny Mistrz Europy Strongman w latach 2002–2004 i 2007–2009. <br />
                    Pięciokrotny Mistrz Świata Strongman w latach 2002, 2003, 2005, 2007 i 2008.
                </Typography>
            </Popover>
        </Container>
    );
}