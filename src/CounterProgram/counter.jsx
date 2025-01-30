import styles from './counter.module.css';
import React, { useState } from 'react';

function Counter() {
   const [count, setCount] = useState(0);
    const [savedCount, setSavedCount] = useState(null); 
    
   const UpdateCount = () => {
    //using the updater function
     setCount(count=>count+ 3);
   };

   const ResetCount = () => {
     setCount(0);
   };

   const DecrementCount = () => {
    //using normal set count
     setCount(count - 1);
   };
     
   const SaveCurrentCount = () => {
     setSavedCount(count); 
   };

   return (
     <div className={styles.container}> 
       <div className={styles.buttonGroup}> 
         <button onClick={DecrementCount} className={`${styles.button} ${styles.decrementButton}`}>
           <b>Decrement</b>
         </button>
         <button onClick={UpdateCount} className={`${styles.button} ${styles.incrementButton}`}>
           <b>Increment</b>
         </button>
       </div>
       <div>
         <p className={styles.countDisplay}>Count: {count}</p>
       </div>
       <button onClick={ResetCount} className={`${styles.button} ${styles.resetButton}`}>
         Reset
       </button>

       <button onClick={SaveCurrentCount} className={`${styles.button} ${styles.saveButton}`}>
         Save Count
       </button>

       <p className={styles.savedDisplay}>
           Saved Count: <b>{savedCount}</b>
         </p>
     </div>
   );
}

export default Counter;