import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {makeStyles} from "@material-ui/core/styles";

function Sorting() {
    const useStyles = makeStyles((theme) => ({

        formControl: {
            margin: theme.spacing(3),
        },
    }));
    const classes = useStyles();
    return (
        <FormControl component="fieldset"  className={classes.formControl}>
            <FormLabel component="legend">Sorting</FormLabel>
            <RadioGroup aria-label="Sorting" name="sort">
                <FormControlLabel  control={<Radio />} label="Price low to high" />
                <FormControlLabel  control={<Radio />} label="Price high to low" />
                <FormControlLabel  control={<Radio />} label="New to Old" />
                <FormControlLabel  control={<Radio />} label="Old to New" />
            </RadioGroup>
        </FormControl>
    );
}

export default Sorting;