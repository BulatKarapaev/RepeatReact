
import React, {useState,useEffect,useRef} from "react";

function MyComponentRef() {

    const inputRef1  =useRef(null);
    const inputRef2  =useRef(null);
    const inputRef3 =useRef(null);


    let [number,setNumber] = useState(0);




    useEffect(() => {
        console.log("Comoponent render")
        

    }) 

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
        //ref.current = ref.current + 1;
        //console.log(ref.current)
    }
    
    function handleClick2() {
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";

        //ref.current = ref.current + 1;
        //console.log(ref.current)
    }
    
    function handleClick3() {
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";

        //ref.current = ref.current + 1;
        //console.log(ref.current)
    }
    return(
        <div>
        <button onClick={handleClick1}>
            Click me1
        </button>
        <input ref={inputRef1}/>

        <button onClick={handleClick2}>
            Click me2
        </button>
        <input ref={inputRef2}/>

        <button onClick={handleClick3}>
            Click me3
        </button>
        <input ref={inputRef3}/>
        </div>


    );


}
export default MyComponentRef;