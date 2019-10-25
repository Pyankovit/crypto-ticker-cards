
import React from 'react';
import { storedData } from './data.js';

export default function Cryptocurrecncy () {
        let {
            id,
            name,
            symbol,
            price_usd,
        }=storedData;
        console.log('govno')
        return (
                <li className={"cryptocurrency "+id}>
                    <p className="cryptocurrency-name">{name} {" "}({symbol})</p>
                    <h1>${(+price_usd).toFixed(2)}</h1>
                </li>
        )
}


