import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {connect} from "react-redux";
import Checkbox from '@material-ui/core/Checkbox';
import {makeStyles} from "@material-ui/core/styles";
import FormGroup from '@material-ui/core/FormGroup';

function TagFilter({tags}) {

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
    const tagCheckbox = tags.map((tagItem)=>{
        return(
            <FormControlLabel control={<Checkbox name={tagItem} />}
                              label={tagItem}
            />
        )
    })
    return(
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Tags</FormLabel>
                <FormGroup>
                    {tagCheckbox}
                </FormGroup>
            </FormControl>
        </div>
    )

}

const mapStateToProps = (state) =>{
    return {tags: state.tags}
}
export default connect(mapStateToProps) (TagFilter);