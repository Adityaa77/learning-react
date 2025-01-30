import profilePic from '../assets/ronaldo.jpg';
import styles from './Card.module.css';
import '../02_Card.css';
function Card() {
   return (
      <div className={styles.Card}>
        <img src={profilePic}alt="profile pic" />
         <h2>Aditya</h2>
         <p>i am learning react js</p>
      </div>
   );
}

export default Card;
