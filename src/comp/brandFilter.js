import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {connect} from "react-redux";
import Checkbox from '@material-ui/core/Checkbox';
import {makeStyles} from "@material-ui/core/styles";
import FormGroup from '@material-ui/core/FormGroup';

function BrandFilter({companies}) {

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            overflow: "auto",
            height: "244px",
            marginTop: "100px"
        },
        formControl: {
            margin: theme.spacing(3),
        },
    }));
    const classes = useStyles();
    const brandCheckbox = companies.map((compItem)=>{
            return(
                <FormControlLabel control={<Checkbox name={compItem.compName} />}
                    label={compItem.compName}
                />
            )
        })
        return(
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Brands</FormLabel>
                    <FormGroup>
                        {brandCheckbox}
                    </FormGroup>
                </FormControl>
            </div>
        )

}

const mapStateToProps = (state) =>{
    return {companies: state.companies}
}
export default connect(mapStateToProps) (BrandFilter);