import React, { useState } from "react";
import useCurrency from "../../hooks/useCurrency";
import useInput from "../../hooks/useInput";

export const CURRENCIES = [
    "USD",
    "EUR",
    "JPY",
    "BGN",
    "CZK",
    "DKK",
    "GBP",
    "HUF",
    "PLN",
    "RON",
    "SEK",
    "CHF",
    "ISK",
    "NOK",
    "HRK",
    "TRY",
    "AUD",
    "BRL",
    "CAD",
    "CNY",
    "HKD",
    "IDR",
    "ILS",
    "INR",
    "KRW",
    "MXN",
    "MYR",
    "NZD",
    "PHP",
    "SGD",
    "THB",
    "ZAR",
    "ARS",
    "DZD",
    "MAD",
    "TWD",
    "BTC",
    "ETH",
    "BNB",
    "DOGE",
    "XRP",
    "BCH",
    "LTC",
    "RUB",
];
const initialBaseCurrencyIndex = 0;
const initialTargetCurrencyIndex =1;
const Converter = () => {
    const [baseCurrency, setBaseCurrency] = useState(CURRENCIES[initialBaseCurrencyIndex]);
    const [targetCurrency,setTargetCurrency] = useState(CURRENCIES[initialTargetCurrencyIndex]);
    const {koef} = useCurrency({
        baseCurrency,
        targetCurrency
    });
    const baseCurrencyInput = useInput();

    console.log(koef);
    console.log('base currency', baseCurrency);
    return(
        <>
            <div className="inputs flex container mt-[20px] ml-auto mr-auto l-0 r-0 justify-center">
                <input className="focus:outline-none p-[16px] text-[18px]" type="text" {...baseCurrencyInput}/>
                <select onChange={(e)=>setBaseCurrency(e.target.value)}>
                   {CURRENCIES.map((currency)=>{
                    return(
                        <option value={currency}>
                            {currency }
                        </option>
                    )
                   })} 
                    {/* <option value="EUR">EUR</option>
                    <option value="USD">USD</option> */}
                </select>
                <select className="p-[16px]" onChange={(e)=>setTargetCurrency(e.target.value)}>
                   {CURRENCIES.map((currency)=>{
                    return(
                        <option value={currency}>
                            {currency}
                        </option>
                    )
                   })} 
                    {/* <option value="EUR">EUR</option>
                    <option value="USD">USD</option> */}
                </select>
                <input className="focus:outline-none p-[16px] text-[18px] bg-white" type="text" disabled value={baseCurrency !== "RUB" && targetCurrency != "RUB" ? +baseCurrencyInput.value * koef : 'РУский корабль иди на*уй'}/>
                
            </div>
        </>
    );
};

export default Converter;
