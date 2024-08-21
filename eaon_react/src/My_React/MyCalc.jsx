//MyCalc.jsx
import CalcHeader from "./CalcHeader";
import CalcBody from "./CalcBody";
import CalcResult from "./CalcResult";
import CalcContext from "./CalcContext";
import { useState } from "react";

export default function MyCalc(props){

    //계산결과를 관리하는 상태변수
    const [calcResult, setCalcResult ]= useState("");

    // function calcResultPrint(room1, room2){
        //     console.log('room1=',room1,",room2=", room2);
    function calcResultPrint(resultStr){
        setCalcResult(resultStr);
    }


    return (
        <div>
          <CalcContext.Provider value={calcResultPrint}>
                <CalcHeader/>
                <CalcBody/>
                <CalcResult calcResult={calcResult}/>
           </CalcContext.Provider>
        </div>
    );
}
