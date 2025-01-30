import styles from './prop.module.css';

function Student(props){
   return(
    <div className={styles.mystudent}>
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Is a Student:{props.student ?"Yes" :"No" }</p>
        <p>Cgpa:{props.cgpa}</p>
        <p>Location:{props.location}</p>
    </div>
   );
}
export default Student;