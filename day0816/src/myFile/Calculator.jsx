//Calculator.jsx

// import TemperatureInputCelsius from "./TemperatureInputCelsius";
// import TemperatureInputFahrenheit from "./TemperatureInputFahrenheit";
import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function Calculator(props){

    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c"); //기본값 섭씨

    function BoilingVerdict(props) {
        if (props.celsius >= 100) {
            return <p>물이 끓습니다.</p>;
        }
        return <p>물이 끓지 않습니다.</p>;
    }

    //화씨 ==> 섭씨 변환
    function toCelsius(fahrenheit) {
        return ((fahrenheit - 32) * 5) / 9;
    }
    
    //섭씨 ==> 화씨 변환
    function toFahrenheit(celsius) {
        return (celsius * 9) / 5 + 32;
    }

    //입력된 값이 숫자가 아닌경우 빈문자열 리턴
    //소수점이하 3자리에서 반올림한 결과를 문자열형태로 리턴
    function tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return "";
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    //자식컴포너트에서 입력이있을때 섭씨 state 변경
    const handleCelsiusChange=(temperature)=>{
        setTemperature(temperature);
        setScale("c");
    }

    //자식컴포너트에서 입력이있을때 화씨 state 변경
    const handleFahrenheitChange=(temperature)=>{
        setTemperature(temperature);
        setScale("f");
    }

    const celsius=
       scale === "f" ? tryConvert(temperature, toCelsius) :temperature;
    const fahrenheit =
       scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            {/* <TemperatureInputCelsius/>
            <TemperatureInputFahrenheit/> */}
            <TemperatureInput 
                      scale="c"
                      onTemperatureChange={handleCelsiusChange}
                      temperature={celsius}/>
            <TemperatureInput
                      scale="f"
                      onTemperatureChange={handleFahrenheitChange}
                      temperature={fahrenheit}/>

           <BoilingVerdict celsius={parseFloat(celsius)}/>                      
        </div>
    );
}

export default Calculator;