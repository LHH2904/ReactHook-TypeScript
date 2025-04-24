import {useEffect, useState} from "react";

function UseEffect() {
    const [val, setVal] = useState(1);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setVal(v => v + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>{val}</div>
    );
}

export default UseEffect;