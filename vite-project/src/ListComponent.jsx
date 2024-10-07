
import react ,{useState} from "react";

function ListComponent() {

    const [food,setFood] = useState(["Apple","Orange","Banana"]);


    function handleAddFood() {

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFood([...food, newFood]);


    }

    function handleRemoveFood(index) {
        setFood(food.filter((_,i) => i !== index)); 
        
    }

    return(
        <div>

            <h2>Список еды</h2>

            <ul>
                {food.map((food,index) => <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                        
                    </li>
                ) }
            </ul>
            <input type="text" id = "foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Добав еды</button>
             
        </div>  );
        
  

}

export default ListComponent;