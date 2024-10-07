import React, {useState,useEffect} from 'react';

 
function EffectComponent() {

    const[count,setCount] = useState(0);

    const[color,setColor] = useState("Green");

    useEffect(() => {

       document.title = `Count:${count} ${color}`;

       return () => {


       }
    },[count,color]);


    
    function addCount() {
        setCount(c => c +1);


    }
    function disCount() {
        setCount(c => c - 1);


    }

    function changeColor() {

        setColor(

            c=> c === "green" ? "red" :"green"
        );


    }


    return(<div> 
            <p style={{color: color}}>Count:{count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={disCount}>Minus</button>
            <br/>
            <button onClick={changeColor}>Change Color</button>

    </div>


    );

}

export default EffectComponent