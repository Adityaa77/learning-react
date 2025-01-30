import style from './dgclock.module.css'
import React, { useState, useEffect} from 'react';

function Dgclock(){
    const [time,setTime]=useState(new Date());

    useEffect(() => {
    const intervalId = setInterval(() => {
        setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId); 
}, []);


    
    function formatTime(){
        let hours=time.getHours();
        const minutes = String(time.getMinutes()).padStart(2, '0');
        const seconds = String(time.getSeconds()).padStart(2, '0');
        const meridem=hours<12?"AM":"Pm";

        hours=hours%12 || 12;
        const paddedHours = String(hours).padStart(2, '0');

        return(`${paddedHours}:${minutes}:${seconds}:${meridem}`);
    }    

    return(<div className={style.ClockContainer}>
        
        <div className={style.Clock}>
            <span>{formatTime()}</span>
        </div>
        <p></p>
    </div>);
}

export default Dgclock;