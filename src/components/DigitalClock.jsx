import { useEffect, useState } from "react";

export default function DigitalClock() {

    const [count, setCount] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
          let date = new Date();
          let hours = date.getHours();
          let minutes = date.getMinutes();
          let seconds = date.getSeconds();
          setCount([hours, minutes, seconds]);
        }, 1000);
        return () => clearInterval(interval);
      }, []);      

    return (
        <div className="clock__container">
            <h1>
            {count[0] > 9 ? count[0] : '0' + count[0]}:
            {count[1] > 9 ? count[1] : '0' + count[1]}:
            {count[2] > 9 ? count[2] : '0' + count[2]}</h1>
        </div>
    )
}

// Nota: esta aberración es sólo por pasar el tiempo, don't panic :)