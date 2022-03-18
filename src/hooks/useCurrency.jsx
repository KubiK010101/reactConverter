import axios from "axios";
import React, { useEffect, useState } from "react";

const API_KEY = "d7ea4f57e7674e45b53579767d71c0a6";
const URL = "https://exchange-rates.abstractapi.com/v1/live/";

const useCurrency = ({ baseCurrency, targetCurrency }) => {
    const [koef, setKoef] = useState(undefined);
    const requestKoef = (callback) => {
        
        axios.get(
                `${URL}?api_key=${API_KEY}&base=${baseCurrency}&target=${targetCurrency}`
            )
            .then((response) => {
                console.log(response);
                console.log(response.data.exchange_rates[targetCurrency]);
                callback(response.data.exchange_rates[targetCurrency])

            })
            .catch((error)=>{
                console.log(error)
            })
            ;
    };
    useEffect(() => {
        requestKoef((requestedKoef) => {
            setKoef(requestedKoef);
        });
    }, [baseCurrency,targetCurrency]); 
    return{
        koef
    }
};

export default useCurrency;
