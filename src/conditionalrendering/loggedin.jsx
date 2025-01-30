import styles from './loggedin.module.css';
import PropTypes from 'prop-types';

function usergreetings(props){
    console.log("--- Debugging usergreetings props ---");
    console.log("Full props object:", props); 
    console.log("props.username:", props.username); 
    console.log("Is props.username an empty string?", props.username === "");
    console.log("Is props.username undefined?", props.username === undefined);
    console.log("--- End Debug ---");
          const Welcome=<h1 className={styles.myh1}>Welcome to The Page {props.username}</h1>;
          const NotLoggedin=<h1 className={styles.mylogin}>Please log in First</h1>;
          
          
    return (
    <div className={styles.mydiv}>
    {props.isloggedin ? Welcome : NotLoggedin}
    </div>
    );
}

usergreetings.propTypes = {
    username: PropTypes.string,
    isloggedin: PropTypes.bool,
}

usergreetings.defaultProps = {
    username: "Guest",
    isloggedin: false,
}

export default usergreetings;