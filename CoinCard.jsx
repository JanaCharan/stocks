import React from 'react';


const CoinCard=({onMouseEnter,coin,onClick}) => {
      
    return(
              /*
        <>
        
        <h3>Rank is {coin.market_cap_rank}</h3>
        <img src={coin.image} alt={coin.id}/>
        <h3>
        name of coin is {coin.id}
        </h3>
        <h3>
            symbol of coin is {coin.symbol}
        </h3>
        </>
        */
        
        <div className='Card' style={{ backgroundImage:`url(${coin.image})`}} onMouseEnter={onMouseEnter} onClick={onClick}>
            
        <h2>{coin.symbol.toUpperCase()}</h2>
            
        
        </div>

        
    )
    
}

export default CoinCard