import axios from "axios";

export const findBookInfoById = (isbn,setBookInfo) => {
  axios.get(`http://localhost:8080/book/upform?isbn=${isbn}`)
       .then((response)=>{  
           //URL요청후 실행할 문장
          //  response.data ==> Person
              setBookInfo(response.data);
       });


};
