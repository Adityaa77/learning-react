import styles from './list.module.css';
import PropTypes from 'prop-types';

function List(props){
  const useritems = [
    {id:1, name:'aditya', marks:44},
    {id:2,name: 'adiraj', marks:60},
    {id:3,name: 'adidas', marks:70},
    {id:4,name: 'adivansh', marks:80}
  ];
       
  const category = props.category;
  const itemlist = props.items;

  useritems.sort((a,b) => a.name.localeCompare(b.name));  // alphabetical sorting
     
  const lowmarks = itemlist.filter(useritems => useritems.marks <= 50); // to get low marks

  // use to get the low marks
  const listitemss = lowmarks.map(item => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.marks}</b>
    </li>
  ));

  // used to get the overall marks
  const listitems = itemlist.map(item => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.marks}</b>
    </li>
  ));

  return (
    <div className={styles.container}> 
      <h3>{category}</h3>
      <ol>{listitems}</ol>
    </div>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    marks: PropTypes.number.isRequired,
  })).isRequired
};

List.defaultProps = {
  category: "Category",
  items: []
};

export default List;
