import axios from "axios";

export const saveBooksToStorage = (book) => {
  axios.put("http://localhost:8080/book/upform", book);
};

export const deleteBooksToStorage = (isbn) => {
  console.log(typeof isbn, isbn);

  axios.delete(`http://localhost:8080/book/delete?isbn=${isbn}`);
  //백앤드 PersonController에서는 @GetMapping을 @DeleteMapping으로 변경해야 합니다.
};
