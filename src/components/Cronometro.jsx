import { useEffect, useState } from "react";

export default function Cronometro() {

    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(false);

    useEffect(() => {
        let millis = 0;
        let interval
        if (timer) {
            interval = setInterval(() => {
                millis += 10;
                setCount(count + millis);
            }, 10);
        }
        return () => { clearInterval(interval) };
    }, [timer]);

    return (
        <div>
            <h2>{new Date(count).toUTCString()}</h2>
            {!timer && count === 0 && <button onClick={() => setTimer(true)}>Start</button>}
            {timer && <button onClick={() => setTimer(false)}>Stop</button>}
            {!timer && count > 0 && <button onClick={() => setTimer(true)}>Resume</button>}
            {!timer && count !== 0 && <button onClick={() => setCount(0)}>Reset</button>}
        </div>
    );
}