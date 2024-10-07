import styles from "./list.module.css"
import PropTypes from "prop-types"

function List(props) {

    const fruits = [ { id: 1,name: "Appple",calories: 95},
        {id: 1,name:"Ovakado", calories: 30},
        {id: 1, name: "Orange", calories: 35},
        {id: 1,name: "Watermelow", calories: 22},
        {id: 1,name: "Banana", calories: 19}] ;

    
    //fruits.sort((a,b) => a.name.localeCompare(b.name));
    //fruits.sort((a,b) => b.name.localeCompare(a.name));
   /// fruits.sort((a,b) => a.calories - b.calories); // по увеличвению
   const lowCalFruits = fruits.filter(fruit => fruit.calories < 90);

   const itemList = props.items

   const category = props.category




   fruits.sort((a,b) => b.calories - a.calories);


    const listItems= itemList.map(item => <li key={item.name}> 
    {item.name}: &nbsp;
    <b>{item.calories} </b>
    </li>); 
        return(<>

         <h3 className={styles.listCategory}>{category }</h3>
         <ol  className={styles.listItems}> {listItems}</ol>

        </>

        );



}

List.defaultProps = {

    category: "Category",
    items: [],
 
}

List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
        name: PropTypes.string, calories: PropTypes.number
     } ))

}

export default List

