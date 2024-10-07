import react ,{useState,useEffect, useCallback} from 'react'


function DigitallClock() {

    const [time,setTime] = useState(new Date());

    useEffect(() => {

        const intervalId = setInterval(() => {
            setTime(new Date());
        },1000);

        return() => {
            clearInterval(intervalId);

        }
    }, []);

function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const merdiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}: ${padZero(minutes)}: ${padZero(seconds)} ${merdiem}`


}


function padZero (number) {

    return (number < 10 ? "0" : "") + number; 

    


}

 
  
    return(
        <div className='clock-container'>
            <div className='clock'>

              <span>{formatTime()}</span>
            </div>



        </div>

 );

}

export default DigitallClock;