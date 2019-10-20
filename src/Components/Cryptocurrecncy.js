
import React, { Component } from 'react'

export default class Cryptocurrecncy extends Component {
    render() {
        let {
            id,
            name,
            symbol,
            price_usd,
        }=this.props.data;

        return (
            <div>
                <li className={"cryptocurrency "+id}>
                    <p className="cryptocurrency-name">{name} {" "}({symbol})</p>
                    <h1>${(+price_usd).toFixed(2)}</h1>
                </li>
            </div>
        )
    }
}


