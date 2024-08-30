import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { Content, Title, Wrapper } from "styles";
import { ROUTE } from "Route";
import * as S from "./BookListStyle";
import { getBooksFromStorage } from "../../utils/getBooksFromStorage";

function BookList() {
  // const list = getUsersFromStorage() || [];
  const [list,setList] = useState([]);
  const navigate = useNavigate();
  
  // useEffect(콜백,연관배열);
  useEffect(()=>{
      getBooksFromStorage(setList);
  },[]);

  let render = <Title>등록된 책이 없습니다.</Title>;
  if (list) {
    render = list?.map((book) => (
      <S.Row key={book.isbn}>
        번호: {book.isbn} 제목: {book.title} 저자: {book.author} 가격: {book.price} 설명: {book.desc}
        <S.ButtonWrapper
          onClick={() => {
            navigate(ROUTE.EDIT + `${book.isbn}`);
          }}
        >
          수정
        </S.ButtonWrapper>
      </S.Row>
    ));
  }
  return (
    <Wrapper>
      <Title>책 목록</Title>

      <Content>{render}</Content>
      <Button
        disabled={false}
        text="책 등록하기"
        clickFunc={() => navigate(ROUTE.REGIST)}
      />
    </Wrapper>
  );
}

export default BookList;
