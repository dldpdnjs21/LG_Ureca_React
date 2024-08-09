// NotificationList.jsx
import React from "react";
import Notification from "./Notification";


const reservedNotications=[
    {message:'안녕하세요, 오늘 일정을 알려드립니다.'},
    {message:'점심시간입니다. 맛점하세요~!!'},
    {message:'일주일간 고생하셨습니다. 마치겠습니다~!!'},
];

let timer;//setInterval 제어

class NotificationList extends React.Component{
   constructor(props){
      super(props);

    //   this.state={};
    this.state = {
        notifications:[] 
    }
   }

   //랜더링 후 호출
   componentDidMount(){
       const {notifications} =this.state;
    //    setInterval(콜백함수,밀리세컨드);
    //    setInterval(()=>{},1000);
       timer = setInterval(()=>{
           if(notifications.length < reservedNotications.length){
               const index = notifications.length;
               notifications.push(reservedNotications[index]);
               this.setState({notifications: notifications});//재렌더링을 위하여 setState()호출
           }else{
               clearInterval(timer);//타이머 종료
           }
       },1000);
   }

   //unmount 전 호출
   componentWillUnmount(){
       if(timer)
        clearInterval(timer);//타이머 종료
   }

   render(){
      return (<div>
                {
                    this.state.notifications.map((notification)=>{
                        return <Notification message={notification.message}/>;
                    })
                }   
             </div>);
   }
}//class NotificationList

export default NotificationList;