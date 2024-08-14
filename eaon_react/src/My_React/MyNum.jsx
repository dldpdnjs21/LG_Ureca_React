import React, { useState } from "react";

function MyNum() {
    //난수 발생 
    const  [com_num, setCom_num] = useState(Math.floor( Math.random()*100 + 1 ));  //1~100

    //사용자가 입력한 데이터를 (상태)관리
    const [user_num, setUser_num] = useState("");
    const [result, setResult] = useState("");

    function checkGuess(){
        console.log("com_num=", com_num, ", user_num=", user_num);
        //값비교 ==결과==> 낮춰주세요 / 높여주세요
        //기준값 ==> 난수를 발생
        if(user_num > com_num){//사용자 입력값이 높을때
            setResult(`[${user_num}] DOWN`);
       }else if(user_num < com_num){//사용자 입력값이 낮을때
            setResult(`[${user_num}] UP`);
       }else{//정답
            setResult("BINGO");
       }
       setUser_num("");//사용자 입력값 지우기
    }

    function handleChange(event){ //HTML 마크업의 변경된 값을 state에 반영
        setUser_num(event.target.value);
    }

    return (
        <div>
            <h1>숫자 맞추기</h1>
            <div>
                <span>1 ~ 100 사이 컴퓨터의 숫자를 맞춰보세요</span>
                <br/>
                <input type="number" min="0" max="100"
                        value={user_num}
                        onChange={handleChange} />
                <button onClick={checkGuess}>정답 확인</button>
            </div>
            <hr />
            <div>
                <span>확인 결과 {result}</span>
            </div>
        </div>
    );
}

export default MyNum;