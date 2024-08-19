// ConfirmButton.jsx

import React from "react";

// '확인하기'버튼  ===누르면==> '확인됨'버튼 (with 비활성화)
class ConfirmButton extends React.Component{
    constructor(props){
       super(props);
       this.state={ age:0,
                    isConfirmed:false
                  }
       this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleConfirm(){ //콜백
       this.setState( (prevState)=>(  {isConfirmed: !prevState.isConfirmed} ));
    }

    render(){
        return (<button onClick={this.handleConfirm}
                        disabled={this.state.isConfirmed} > 
                   {this.state.isConfirmed  ?   "확인됨" : "확인하기"}
                </button>);
    }
}

export default ConfirmButton;

