import styles from './bgcolor.module.css';
import React, { useState } from 'react';

function BgColor() {
const getFontColor = (bg) => (
  bg === '#000000' ? '#FFFFFF' : '#000000');

    const [color, setcolor] = useState('#FFFFFF');
    const [bgcolor, setbgcolor] = useState('#FFFFFF');

  function handlecolor(e) {
    setcolor(e.target.value);
}

function handlebgcolor(e) {
    setbgcolor(e.target.value);
    document.body.style.backgroundColor = e.target.value;
}
    return (
        <div className={styles['color-picker']}>
            <h1 style={{color:getFontColor(bgcolor)}}>Color Picker</h1>
            <div className={styles.colorDisplay} style={{ backgroundColor: color }}>
                <p style={{color:getFontColor(color)}} >Selected Color:{color}</p>
              <div className={styles.input}>
            <label style={{color:getFontColor(color)}}>Select a Color</label>
            <input type='color' value={color} onChange={handlecolor}></input>
                </div>  
             </div>
            
            <div className={styles.bgDisplay} style={{ backgroundColor: bgcolor }}>
                <p style={{color:getFontColor(bgcolor)}}>Selected BgColor:{bgcolor}</p>
            
            <label style={{color:getFontColor(bgcolor)}}></label>
            <input type='color' value={bgcolor} onChange={handlebgcolor}></input>
           </div>
        </div>
    );
}

export default BgColor;
