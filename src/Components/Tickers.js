import React, { Component} from 'react';
import './Tickers.css';
import axios from 'axios';
import Select, { components } from "react-select";

export default class Tickers extends Component {
    state={
        wanted:[], 
        allCurrency:[
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
            this.setState({allCurrency: response.data});
             console.log(response.data);
        })
        .catch(err=>console.log(err));
    }

    checklocalStorage(){
        if (localStorage.getItem("wanted") !== undefined) {
            const localWanted=JSON.parse(localStorage.getItem('wanted'));
            this.setState({ wanted: localWanted.wanted});
        }else {
            let{ wanted } = this.state;
            localStorage.setItem('wanted', JSON.stringify({ wanted })); 
            if (localStorage.getItem("wanted") === null) {
            alert('Ваш браузер не поддерживает localStorage!');      
          } 
        }
        } 
    
    componentDidMount() {
        this.fetchCryptoData();
        this.checklocalStorage();
    }

    handleChange = wanted => {
        this.setState({ wanted });
        localStorage.setItem('wanted', JSON.stringify({ wanted }));
      };

    render() {
        let{ wanted } = this.state;
        if (wanted==null){wanted=[]}
        return (
            <div className="tickers-containers">
                            <h1>Список поиска отслеживаемых криптовалют</h1>
                            <Select
                                hideSelectedOptions={false}
                                isMulti
                                options={this.state.allCurrency}
                                onChange={this.handleChange}
                                getOptionLabel={option =>`${option.name} (${option.symbol})`}
                                getOptionValue={({ symbol }) => symbol}
                                />
                            <h1>Список отслеживаемых криптовалют</h1>
                            <div className="selected-options">
                                {wanted.length > 0 && wanted.map(item => <div data={item} key={item.id}>
                                    <li className={"cryptocurrency "+item.id}>
                                        <h1 className="cryptocurrency-name">Название{" "}{item.name}</h1>
                                        <h2 className="cryptocurrency-symbol">Символ{" "}{item.symbol}</h2>
                                        <h2 className="cryptocurrency-price">Текущая цена (доллар США) {" "}${(+item.price_usd).toFixed(2)}</h2>
                                    </li>
                                </div>)}
                            </div>
            </div>
        );
    }
}