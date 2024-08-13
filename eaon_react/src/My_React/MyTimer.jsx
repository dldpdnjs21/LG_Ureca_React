import { useEffect, useState } from "react";

function MyTimer(props){

    const[timer, setTimer] =useState(30); //초기값 30인 timer변수 state정의

    function myTimer(){
        setTimer(timer-1); //state timer변수의 값을 변경
    }

    useEffect(()=>{ 
        const tid = setInterval(myTimer, 1000 ); 

        if(timer <= 0){
            clearInterval(tid); //setInterval(타이머) 정지
        }

        return ()=>{  clearInterval(tid);  }  //unmount전에 실행

     },[timer] ); //timer값 변경시 useEffect실행

    return(
        <div>
            <h3>Timer: {timer}</h3>
        </div>
    );
}

export default MyTimer;