
import React, {useState} from 'react';



function MyComponent() {

/*
 const [name, setName] = useState("")
 const [quantity, setQuantity] = useState(1);
 const [comment,setComment] = useState("");
 const [payment,setPayment] = useState("");
 const [shipping,setShiping] = useState("");


function handleNameChange(event) {
    setName(event.target.value);


}

function handQuantityChange(event) {
    setQuantity(event.target.value);

}

function handleCommentChange(event) {

    setComment(event.target.value);
}

function handlePaymentChange(event) {
    setPayment(event.target.value); 
}
function handleShipingChange(event) {
        setShiping(event.target.value);


}


    return(
        <div>
            <input value={name}  onChange={handleNameChange} />  
            <p>Name {name}</p>
            <input value={quantity} onChange={handQuantityChange} type='number'/>

            <p>Quantity: {quantity} </p>

            <textarea  value={comment}   onChange={handleCommentChange} placeholder='Enter delivery instruction'/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}> 
                <option value="">Select on option</option>
                <option value= "Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="GiftCard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type='radio' value="Pick Up" checked = {shipping === "Pick Up"} onChange={handleShipingChange}></input>
                Pick Up
            </label>
            <br/>
            <label>
            <input type='radio' value="Delivery" checked = {shipping === "Delivery"} onChange={handleShipingChange}></input>
                Delivery
            </label>

            <p>Shipping: {shipping}</p>
        </div>
    )
    */
    const [name, setName] = useState("Goose");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);


    const updateName = () => {
        setName("Aang");
    }
    const IncrementAge = () => {
        setAge(age + 1);

    }
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed) 

    }


    return(<div>
        <p>Name:  {name} </p>
        <button onClick = {updateName}>Set name </button>

        <p>Age:  {age} </p>
        <button onClick = {IncrementAge}>Increment age </button>


        <p>Is employed:  {isEmployed ? "Yes" : "No"} </p>
        <button onClick = {toggleEmployedStatus}>Toggle status </button>
    </div>);


    
}

export default MyComponent;