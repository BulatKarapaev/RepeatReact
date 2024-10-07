import React, {useState,useEffect} from 'react'

function EffectDepenComponent() {


    const [width,setWidth] =  useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);


    useEffect(() => {
        window.addEventListener("resize",handleResire);
        console.log("Event Listener add");

        return() => {
            
            window.removeEventListener("resize",handleResire);
            console.log("Event Listener remove");
        }

    },[]
     );

     useEffect(() => {
        document.title = `Size: ${width} x ${height} `;


     },[width,height]
    
    
    );


    

    function handleResire() {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth)



    }

    return(
        <><p> Window: width: {width}px </p>
        <p>Window: Height: {height}px</p>
          
            </>
        

    );


}

export default EffectDepenComponent;