// MyApp.jsx

export default function MyApp(){
   //전달데이터 => "쉬는 시간"
   return <GrandParent value="조용주입니다"/>;
}

function GrandParent({value}){
   return <Parent value={value}/>;
}
function Parent({value}){
   return <Child value="고주희입니다."/>;
}
function Child({value}){
   return <GrandChild value={value}/>;
}
function GrandChild({value}){
   return <Message value={value}/>;
}







function Message({value}){
   return <div>전달받은 데이터: {value} </div>;
}




// function Child(props){
//    return <div>전달받은 데이터: {props.value} </div>;
// }


