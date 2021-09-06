import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {connect} from "react-redux";


function ProdCont({products}) {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            marginLeft:"15px"
        },
        paper: {
            padding: theme.spacing(3),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            width: "175px"
        },
    }));

    const classes = useStyles();
    const prodCont = products.length ? (
        products.map((prodItem) => {
            return (
                <Grid item xs={3} >
                    <Paper elevation={0} className={classes.paper} xs ={3}>
                        <img
                            src="https://60e220e7a8b90f00086c600e--sharp-chandrasekhar-67f159.netlify.app/images/ayi.png"
                            alt="bear" className="prodImg"/>
                        <br/>
                        <span className="price">₺ {prodItem.prodPrice}</span>
                        <br/>
                        <span className="prodName">{prodItem.productName}</span>
                        <br/>
                        <Button variant="contained" color="primary" className="addButton">
                            Add
                        </Button>
                    </Paper>
                </Grid>

            )
        })

    ) : (
        <h1>Loading...</h1>
    )
    return prodCont;
}

const mapStateToProps = (state) =>{
    return {products: state.products}
}



export default connect(mapStateToProps) (ProdCont);