

function Button() {


    let count = 0;
    const handleClick= (name) =>  {
       
        if(count < 3) {

            count++;
            console.log(`${name} you cliked me ${count} time`);
        }
        else{
            console.log(`${name} stop cliked me` )


        }
    }

    const handleClick2 = (e) => e.target.textContent = "Ouch!😍";

    
  

    //const handleClick2= (name) => console.log(` ${name} stop cliking me`)

    return(
         <button onClick= {(e) =>handleClick2(e)} >  Clik😊 </button>
        );
 

} 

export default Button