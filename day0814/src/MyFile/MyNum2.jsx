import React, { useState } from "react";

function MyNum(props) {
    // 난수 발생 
    const [com_num, setCom_num] = useState(Math.floor(Math.random() * 100 + 1)); // 1~100
    // 사용자가 입력한 데이터를 (상태) 관리
    const [user_num, setUser_num] = useState("");
    const [result, setResult] = useState("");
    const [countNum, setCountNum] = useState(0);
    const [numList, setNumList] = useState([]);

    function checkGuess() {
        console.log("com_num=", com_num, ", user_num=", user_num);

        let currentResult = "";
        if (user_num > com_num) { // 사용자 입력값이 높을 때
            currentResult = `[${user_num}] DOWN`;
        } else if (user_num < com_num) { // 사용자 입력값이 낮을 때
            currentResult = `[${user_num}] UP`;
        } else { // 정답
            currentResult = "BINGO!";
        }

        setResult(currentResult);
        setCountNum(countNum + 1);
        setNumList([...numList, { attempt: countNum + 1, result: currentResult }]);
        setUser_num(''); // 사용자 입력값 지우기
    }

    function handleChange(event) { // HTML 마크업의 변경된 값을 state에 반영
        setUser_num(event.target.value);
    }

    function gameReset(){
        setCom_num(Math.floor(Math.random() * 100 + 1));
        setUser_num("");
        setResult("");
        setCountNum(0);
        setNumList([]);
        console.clear();
    }

    return (
        <div>
            <h1>숫자 맞추기</h1>
            <p>1~100 사이 컴퓨터의 숫자를 맞춰보세요</p>
            <p>{countNum + 1}번째 시도</p>
            <input type="number"
                   min="1"
                   max="100"
                   value={user_num}
                   onChange={handleChange} />
            <button onClick={checkGuess}>정답확인</button>
            <button onClick={gameReset}>다시시작</button>
            {result && <div>확인결과: {result}</div>}
            <hr />
            <div>
                <ul>
                    {numList.map((item, index) => (
                        <li key={index}>{item.attempt}번째 시도 {item.result}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MyNum;