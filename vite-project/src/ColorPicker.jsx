 import react ,{useState} from "react";
 
 function ColorPicker() {
    
    const [color,setColor] = useState("#ffffff");

    function handleColorChange(event) {
            setColor(event.target.value);
            

    }


    return(<div className="color-picker-container">

        <h1>Color Pikcer</h1>
        <div className="color-display" style={{background: color}}>
            <p>Selected Color: {color}</p>

            </div>

            <laber>Select a color: </laber>
            <input type="color" value={color} onChange={handleColorChange}/>
        
        </div>)
 }

 export default ColorPicker