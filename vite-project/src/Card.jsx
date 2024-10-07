import profilePic from "./assets/Shreek.jpg"

 function Card () {

    
return (


    <div className="Card" >

           <img  className = "card-image" src={profilePic} alt="My profile"></img>

        <h2 className="card-title">Me Me Bulat</h2>
        <p className="card-text">I live yet</p>

    </div>
);



  
}

export default Card;