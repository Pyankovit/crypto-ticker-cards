import React, { useState, useEffect  } from 'react';
import Cryptocurrency from './Cryptocurrecncy';
import './Tickers.css';
import axios from 'axios';
import ExampleSelect from './exampleSelect';
import { SortableContainer } from 'react-sortable-hoc';
import { storedData } from './data.js';


export default function Tickers() {
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('react');
    const [wanted, setWanted]= useState(["bitcoin", "ethereum", "ripple"]);

    useEffect(() => {
        let ignore = false;
        async function fetchData(){
            const result = await axios.get("https://api.coinmarketcap.com/v1/ticker/");
            //const filteredResult=(result)=>result.filter(currency=>wanted.includes(currency.id)||wanted.includes(currency.symbol));
            localStorage.setItem("allData", JSON.stringify(result.data));
            const storedData = JSON.parse(localStorage.getItem("allData"));
            if (!ignore) setData(storedData);
            console.log(result.data);
            console.log(storedData);
            //console.log(idList);
        }
        fetchData();
        return () => { ignore = true; }
      }, [query]);

      let tickers=()=>storedData.map((currency)=><Cryptocurrency data={currency} key={currency.id}/>);
      return (
          <div className="tickers-containers">
                <ExampleSelect/>
                <ul className="tickers">{tickers}</ul>
                    <p>
                        Информация обновляется каждые 10 секунд
                    </p>
            </div>
        )
    
}
