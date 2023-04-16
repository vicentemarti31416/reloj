import { useEffect, useState } from "react";

export default function CuentaAtras() {

    const [count, setCount] = useState('');
    const now = new Date().getTime();

    useEffect(() => {
        let counter = 0;
        const interval = setInterval(() => {
            counter += 1000;
            const reverseDate = new Date(now - counter); 
            setCount(reverseDate.toLocaleString()); 
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>{count}</h2>
        </div>
    );
}
