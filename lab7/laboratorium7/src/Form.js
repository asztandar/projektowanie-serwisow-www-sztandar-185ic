import React from 'react'
import './css/Form.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



  
const useStyles2 = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

export default function Form() {
    const [value, setValue] = React.useState('female');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };

   
    const classes2 = useStyles2();

    return (
        <div className="Form-Container">
            
            <div className="Form-Container-Container">
            <span class="Form-Container-hello">Formularz</span>
            <br/>
                <form className="" noValidate autoComplete="off">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Płeć:</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="female" control={<Radio />} label="Kobieta" />
                        <FormControlLabel value="male" control={<Radio />} label="Mężczyzna" /> 
                        </RadioGroup>
                    </FormControl>
                    <br />
                    <hr className="Form-Container-HR" />
                    <br />
                    <TextField id="outlined-basic" label="Imię" variant="outlined" className="outlined" />
                    <TextField id="outlined-basic2" label="Nazwisko" variant="outlined" className="outlined" />
                    <br />
                    <hr className="Form-Container-HR2" />
                    <br />
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2020-12-15"
                        className={classes2.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </form>
            </div>
        </div>
    );
  }