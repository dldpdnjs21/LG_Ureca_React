import React, {useEffect, useState} from "react";

function Menu(props){
    // let cnt=0;
    const menus=["마라탕","미정국수","곤드레나물밥"
        ,"베이글","회덮밥"];


    const [cnt, setCnt ] = useState(0);
    const [menu, setMenu ] = useState("");


    useEffect(()=>{
       //랜더링 내용 변경시 호출
       document.title= `이펙트 클릭 - ${cnt}번, 메뉴 - ${menu} `;
       //브라우저 탭 제목 변경 
    }); // ==> 재 랜더링시 실행
    // },[]); // ==> mount와 unmount시에만 실행 (update시에는 호출X)
    // },[cnt,menu]);  //==> 명시된 state가 변경되었을때 실행


    return (
            <div>
                <p>총 {cnt}번 클릭했습니다.<br/>
                    오늘의 메뉴: {menu}
                </p>
                <button onClick={()=>{ 
                    setCnt(cnt+1);
                    console.log('cnt=',cnt);
                } }>플리즈 클릭</button>
                
                <button onClick={()=>{ 
                    setMenu(menus[parseInt(Math.random()*menus.length)]);
                } }>점심메뉴</button>

            </div>
    );
}

export default Menu;