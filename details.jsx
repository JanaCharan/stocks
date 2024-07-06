'use client';
import React, { useState, useEffect }  from 'react';
import { useLocation } from 'react-router-dom';
import {
    AreaChart,
  Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
  import CoinInfo from './coinInfo';;


const Details=() =>{
    const location=useLocation();
    const id=location.state.displayer.id;

    const [show,setShow]=useState('Price')
    const [rawData,setRawData]=useState([]);
    const options = {
        method: 'GET',
        headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-6DAD6m9G1S9bPVHqt3eBAEuZ' },
      };
      const [days,setDays]=useState('365');
      useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`, options);
                const data = await response.json();
                setRawData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData(); 
    }, [days]);

    const data = rawData.prices?.map((priceData,index) => ({
        time: priceData[0],
        Price: priceData[1],
        MarketCap: rawData.market_caps[index][1],
        TotalVolume: rawData.total_volumes[index][1]
      })) || [];   
      
      
      const formatTime=(days) =>{
        if(days=='1'){
          return '1D'
        }
        else if(days=='7'){
          return '1W'
        }
        else if(days=='30'){
          return '1M'
        }
        else if(days=='90'){
          return '3M'
        }
        else if(days=='180'){
          return '6M'
        }
        else{
          return '1Y'
        }
        
      }
    return(
       
        
      <div className='details'>
        {data?.length>0 ?(
          <>
          <div className='photo'>
          <img src={location.state.displayer.image} />
          </div>
          <div className='Title'>
            <h1>{id.toLocaleUpperCase()}</h1>
          </div>
          
          <div className='buttons'>
            <button onClick={() => setShow('Price')}>Prices</button>
            <button onClick={() => setShow('MarketCap')}>MarketCap</button>
            <button onClick={() => setShow('TotalVolume')}>TotalVolume</button>
          </div>
          <div className='Title'>
            
            
          <h1> {show.toLocaleUpperCase()}<span style={{ marginLeft: '10px' }}>{formatTime(days)}</span></h1>
          
          </div>
            <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
            <AreaChart
            width={1540}
            height={700}
            data={data}   
          >

<defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
  </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time"
                            tickFormatter={(unixTime) => {
                                const date = new Date(unixTime);
                                if(days==1){
                                  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
                                }
                                else if(days>1 && days<90){
                                  return `${date.getMonth() + 1}/${date.getDate()}/${date.getYear()}`;
                                }
                                else{
                                  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
                                }
                            }}/>
            <YAxis  tickFormatter={(price) => {
                if (price >= 1e9) {
                  return '$'+(price / 1e9).toFixed(2) + 'B';
                } else if (price >= 1e6) {
                  return '$'+(price / 1e6).toFixed(2) + 'M';
                } else {
                  return '$'+price.toFixed(2);
                }
              }}/>
            <Tooltip formatter={(value, name, props) => ['$' + value, name]}/>
            <Legend />
            <Area
          type="monotone"
          dataKey={show}
          stroke="#7c3aed"
          stackId="1"
          fillOpacity={1} fill="url(#colorUv)"
        />
          </AreaChart>
          </ResponsiveContainer>
          </div>
          <div className='buttons'>
            <button className='button1' onClick={() => setDays('1')}>1D</button>
            <button className='button1' onClick={() => setDays('7')}>1W</button>
            <button className='button1' onClick={() => setDays('30')}>1M</button>
            <button className='button1' onClick={() => setDays('90')}>3M</button>
            <button className='button1' onClick={() => setDays('180')}>6M</button>
            <button className='button1' onClick={() => setDays('365')}>1Y</button>                                                                      
        </div>
        <div className='abtCoin'>
        <CoinInfo data={location.state.displayer} />
        </div>
          </>
        ):(
          <div className='load'>
            <h2>Lets wait for data</h2>
            </div>
        )

        }

        
      
    </div>
    )
}

export default Details