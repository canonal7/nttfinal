import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import {createStore} from "@reduxjs/toolkit";
import reducer from "./comp/reducer";
import fetchAllData from "./comp/data";
import {Provider} from "react-redux";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ProdCont from "./comp/ProdCont";
import Sorting from "./comp/sorting";
import BrandFilter from "./comp/brandFilter";
import TagFilter from "./comp/tagFilter";


function App() {
    const [products, setProducts] = useState ([]);
    const [companies, setCompanies] = useState([]);
    const [tags, setTags] = useState([]);

    const fetchProducts = () =>{
        axios.get("https://getirserver.herokuapp.com/api/products").then((res) =>{
            const prodArr = res.data.map((productItem, index) =>{
                return {
                    productName: productItem.name,
                    productTags: productItem.tags,
                    prodDescription: productItem.description,
                    prodSlug: productItem.slug,
                    prodAdded: productItem.added,
                    prodManufacturer: productItem.manufacturer,
                    prodItemType: productItem.itemType,
                    prodPrice: productItem.price,
                    id:index
                }
            })
            const tagArr = res.data.map((tagItem, index) => {
                return{
                    tags: tagItem.tags
                }
            })
            setTags(tagArr);
            setProducts(prodArr);
        });
    }
    const fetchCompanies = () =>{
        axios.get("https://getirserver.herokuapp.com/api/companies").then((res) => {
            const compArr = res.data.map((compItem, index) => {
                return {
                    compName: compItem.name,
                    compSlug: compItem.slug,
                    compAddress: compItem.address,
                    compCity: compItem.city,
                    compState: compItem.state,
                    compZip: compItem.zip,
                    compAccount: compItem.account,
                    compContact: compItem.contact,
                    id: index
                }
            })
            setCompanies(compArr);
        });
    }
    const initialStore = {
        companies: [],
        products: [],
        tags:[],
        total: 0
    }
    const store = createStore(reducer, initialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    useEffect(()=> {
        fetchCompanies();
    },[]);
    useEffect(()=> {
        fetchProducts();
    },[]);
    useEffect(()=> {
        store.dispatch({type:"GET_DATA", payload:{products, companies, tags}})
    },[products,companies, tags]);
    console.log(`out use effect`, companies);
    console.log(`out use effect`, products)
       // fetchAllData();






  return (
    <Provider store={store}>
      <div className= "navbar">
          <div className="basketBg">
              <div className="total">
              </div>
          </div>
      </div>
        <Grid container item spacing={3} justifyContent="space-between" direction="row" style={{backgroundColor:"grey"}}>
            <Grid container xs={3} spacing={3} style={{backgroundColor:"white"}} direction="column">
                <Sorting/>
                <BrandFilter/>
                <TagFilter/>
            </Grid>

            <Grid container xs={9} spacing={3} >
                <ProdCont/>
            </Grid>

        </Grid>



    </Provider>
  );
}

export default App;
