import React, { Component } from 'react';
import Cryptocurrency from './Cryptocurrecncy';
import SortableSelect from './SortableSelect';
import './Tickers.css';
import axios from 'axios';
import { SortableContainer } from 'react-sortable-hoc';

export default class Tickers extends Component {
    state={
        wanted:["bitcoin", "ethereum", "ripple"],
        data:[
            { 
                id: "bitcoin",
                name: "Bitcoin",
                symbol: "BTC",
                price_usd: "1",
            }
        ]
    }
    fetchCryptoData(){
        axios.get("https://api.coinmarketcap.com/v1/ticker/")
        .then(response=>{ 
             let filteredResult=response.data.filter(currency=>this.state.wanted.includes(currency.id)||this.state.wanted.includes(currency.symbol));
             let wantedResult=response.data.filter(currency=>currency.id);
             this.setState({data: filteredResult});
             console.log(filteredResult);
             console.log(wantedResult);
             console.log(this.state);
        })
        .catch(err=>console.log(err));
    }

    componentDidMount() {
        this.fetchCryptoData();

        //this.interval=setTimeout(()=>this.fetchCryptoData(), 1*1000);
    }


    

    render() {
        let tickers=this.state.data.map((currency)=>
        <Cryptocurrency data={currency} key={currency.id}/>);
        let cryptoDataSelect=this.state.data.map((currency)=>
        <SortableSelect data={currency} key={currency.id}/>);
        
        return (
            <div className="tickers-containers">
            <SortableSelect/>
                <ul className="tickers">{tickers}</ul>
                    <p>
                        Информация обновляется каждые 10 секунд
                    </p>
            </div>
        );
    }
}
