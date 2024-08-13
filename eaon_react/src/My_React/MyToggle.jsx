//MyToggle.jsx
import React from "react";
class MyToggle extends React.Component{
    constructor(props){
       super(props);
       this.state={isToggleOn: true};//토글을 표현하는 상태변수
   } 

    handleClick(){//콜백함수
  
       this.setState((currState)=> ({isToggleOn: !currState.isToggleOn}));
       
    }

    render(){
        return (
            <button onClick={ ()=> this.handleClick() }>
                 {this.state.isToggleOn ? '켜짐'  : '꺼짐'}
            </button>
        );
    }
}

export default MyToggle;

