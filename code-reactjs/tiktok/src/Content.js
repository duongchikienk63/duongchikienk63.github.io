import { useEffect, useState } from "react";

function Content() {
    const [countdown, serCountdown] = useState(180)

    useEffect(() => {
        setInterval(() => {
            serCountdown(prev => prev -1 )
        }, 1000)
    }, [])

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Content;