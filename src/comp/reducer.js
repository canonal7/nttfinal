import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import fetchAllData from "./data";

function reducer(state, action) {
    if(action.type === "GET_DATA"){
        let tagsArray = [];
        for(let i =0; i < action.payload.products.length; i++){
            tagsArray = new Set([...tagsArray, ...action.payload.products[i].productTags]);
        }
        const sortedTags = Array.from(tagsArray).sort((first, second) => first.localeCompare(second));
        return{
            ...state,
            products: action.payload.products,
            companies: action.payload.companies,
            tags: Array.from(sortedTags),
        }

    }
    return state;
}

export default reducer;