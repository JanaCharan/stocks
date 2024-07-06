import React from 'react';

const CoinInfo = ({data}) => {
    return (
        <>
        <div className='container'>
            <h3>ID: <div style={{ color: 'white',fontWeight:'bold',display:'inline' }}>{data.id.toLocaleUpperCase()}</div></h3>
        </div>
        
        <div className='container'>
        <h3>SYMBOL: <div style={{ color: 'white',fontWeight:'bold',display:'inline' }}>{data.symbol.toLocaleUpperCase()}</div></h3>
        </div>

        <div className='container'>
        <h3>NAME: <div style={{ color: 'white',fontWeight:'bold',display:'inline' }}>{data.symbol.toLocaleUpperCase()}</div></h3>
        </div>

        <div className='container'>
        <h3>CURRENT PRICE: <div style={{ color: 'white',fontWeight:'bold',display:'inline' }}>${data.current_price}</div></h3>
        </div>

        <div className='container'>
        <h3>MARKET CAP: <div style={{ color: 'white',fontWeight:'bold',display:'inline' }}>${data.market_cap}</div></h3>
        </div>

        <div className='container'>
        <h3>MARKET CAP RANK: <div style={{ color: 'white',fontWeight:'bold',display:'inline' }}>{data.market_cap_rank}</div></h3>
        </div>

        <div className='container'>
        <h3>FULLY DILUTED VALUE: <div style={{ color: 'white',fontWeight:'bold',display:'inline' }}>${data.fully_diluted_valuation}</div></h3>
        </div>

        <div className='container'>
        <h3>TOTAL VOLUME: <div style={{ color: 'white',fontWeight:'bold',display:'inline' }}>${data.total_volume}</div></h3>
        </div>

        <div className='container'>
        <h3>HIGH(24h): <div style={{ color: 'white',fontWeight:'bold',display:'inline' }}>${data.high_24h}</div></h3>
        </div>

        <div className='container'>
        <h3>LOW(24h): <div style={{ color: 'white',fontWeight:'bold',display:'inline' }}>${data.low_24h}</div></h3>
        </div>

        <div className='container'>
        <h3>PRICE CHANGE(24h): <div style={{ color: 'white',fontWeight:'bold',display:'inline' }}>${data.price_change_percentage_24h}</div></h3>
        </div>

        <div className='container'>
        <h3>ATH: <div style={{ color: 'white',fontWeight:'bold',display:'inline' }}>${data.ath}</div></h3>
        </div>

        <div className='container'>
        <h3>ATH CHANGE: <div style={{ color: 'white',fontWeight:'bold',display:'inline' }}>{data.ath_change_percentage}%</div></h3>
        </div>

        <div className='container'>
        <h3>ATL: <div style={{ color: 'white',fontWeight:'bold',display:'inline' }}>${data.atl}</div></h3>
        </div>

        <div className='container'>
        <h3>ATL CHANGE: <div style={{ color: 'white',fontWeight:'bold',display:'inline' }}>{data.atl_change_percentage}%</div></h3>
        </div>

        
    </>

    );
};

export default CoinInfo;
