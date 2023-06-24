import { useState, useEffect} from "react";

export default function Hooks_Practice() {
    const[count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <p>Number of clicks: {count}</p>
            <button onClick={() => setCount(count + 1)}>Click here</button>
            <br/>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}
