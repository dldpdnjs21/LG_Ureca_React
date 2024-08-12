import React, { useState, useEffect } from "react";

function Timer({ start }) {
    const [seconds, setSeconds] = useState(start);

    useEffect(() => {
        // setInterval을 사용하여 1초마다 seconds 상태를 업데이트합니다.
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);

        // 컴포넌트가 언마운트될 때 interval을 정리(clean up)합니다.
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <h1>Timer: {seconds > 0 ? seconds : "타이머 완료!"}</h1>
        </div>
    );
}

export default Timer;