import {useRef} from "react";

function UseRef() {
    const inputRef = useRef<HTMLInputElement | null>(null);

    // Lấy giá trị input mà không cần dùng useState
    const handleClick = () => {
        if (inputRef.current) {
            alert(`Giá trị input: ${inputRef.current.value}`);
        }
    };

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Get value input</button>
        </div>
    );
}

export default UseRef;