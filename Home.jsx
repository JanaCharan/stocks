import React, { useState, useEffect } from 'react';
import CoinCard from './CoinCard.jsx';
import { useNavigate } from 'react-router-dom';

 
  const Home = () => {

    const options = {
        method: 'GET',
        headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-6DAD6m9G1S9bPVHqt3eBAEuZ' },
      };
      
      
      const dat={
        "id": "bitcoin",
        "symbol": "btc",
        "name": "Bitcoin",
        "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
        "current_price": 70187,
        "market_cap": 1381651251183,
        "market_cap_rank": 1,
        "fully_diluted_valuation": 1474623675796,
        "total_volume": 20154184933,
        "high_24h": 70215,
        "low_24h": 68060,
        "price_change_24h": 2126.88,
        "price_change_percentage_24h": 3.12502,
        "market_cap_change_24h": 44287678051,
        "market_cap_change_percentage_24h": 3.31157,
        "circulating_supply": 19675987,
        "total_supply": 21000000,
        "max_supply": 21000000,
        "ath": 73738,
        "ath_change_percentage": -4.77063,
        "ath_date": "2024-03-14T07:10:36.635Z",
        "atl": 67.81,
        "atl_change_percentage": 103455.83335,
        "atl_date": "2013-07-06T00:00:00.000Z",
        "roi": null,
        "last_updated": "2024-04-07T16:49:31.736Z"
      };
      
      
      
    
    const [coins, setCoins] = useState([]);
    
  
    const listCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options);
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
   
  const [displayer,setDisplayer]=useState(dat)
  const [situ,setSitu]=useState('');
  const handleMouseEnter =(data) => {
    if(data.price_change_24h>0){
      setSitu('Green');
    }
    else{
      setSitu('Red');
    }
    console.log(situ);
    setDisplayer(data);
  }
  
  useEffect(() => {
    listCoins();
    setDisplayer(dat);
  }, []);

const navigate=useNavigate();

 const  handleOnClick=() =>{
    navigate('coin',{state:{displayer}});
  }
  
    return (
      /*
      <>
      
        {coins.length > 0 ? (
          <>
            <h1>We have coins</h1>
            {coins.map((coin) => (
              <CoinCard key={coin.id} coin={coin} />
            ))}
          </>
        ) : (
          <h2>We don't have coins</h2>
        )}
        
        <h1>hi</h1>
      </>
      */
       
        <div className='app'>
          <div className='centerer'>
            <img src={displayer.image} alt={displayer.symbol}/>
            <div className='info'>
            <h1 className='Rank'> Rank : <div style={{ color: 'white',fontWeight:'bold',display:'inline' }}>{displayer.market_cap_rank}</div></h1>
            <h3 className='Name'>Name: <div style={{ color: 'aqua',display:'inline',fontSize:21 }}>{displayer.name}</div></h3>
            <h3 className='Symbol'>Symbol: <div style={{ color: 'aqua',display:'inline',fontSize:21 }}>{displayer.symbol}</div></h3>
            <h3 className='ATH'>ATH Change:  <div style={{ color: situ === 'Green' ? 'green' : 'red',display:'inline',fontSize:21 }}>${displayer.ath_change_percentage}%</div></h3>
            <h3 className='MarketCap'>Market cap : <div style={{ color: 'aqua',display:'inline',fontSize:21 }}>${displayer.market_cap}</div></h3>
            <h3 className='Total vol'>Total volume is: <div style={{ color: 'aqua',display:'inline',fontSize:21 }}>${displayer.total_volume}</div></h3>
            </div>
            <div className='price'>
              <h2>Price</h2>
            <h1 style={{ color: 'aqua' }}>{/*colour change based on 24 hr change*/}
              ${displayer.current_price}
            </h1>
            </div>
          
  
          </div>
          <div className='gridder'>
          {coins?.map((coin) => ( 
              <CoinCard key={coin.id} coin={coin} onMouseEnter={() => handleMouseEnter(coin)} onClick={() => handleOnClick()}/>
            ))}
            </div>
            
            
      </div>
      
      
      
    );
  };

  export default Home