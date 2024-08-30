import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import NavigateButton from "../../components/NavigateButton";
import { ROUTE } from "Route";
import {
  BottomButtonsWrapper,
  Content,
  InputName,
  InputWrapper,
  StyledInput,
  Title,
  Wrapper,
} from "styles";
import axios from "axios";

function RegistBook() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };
  useEffect(() => {
    if (title !== "" && author !== "" && price !== "" && desc !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [title, author, price, desc]);
  const registeBook = () => {
    if (buttonDisabled) {
      return;
    }

    // axios.post("요청URL",전달데이터);
    axios.post("http://localhost:8080/book/form",{ title, author, price, desc });
    alert("등록되었습니다.");
    
    navigate(ROUTE.LIST);
    
  };//registeUser


  return (
    <Wrapper>
      <Title>도서 정보 입력</Title>
      <Content>
        <InputWrapper>
          <InputName>제목</InputName>
          <StyledInput
            onChange={handleTitleChange}
            type="text"
            placeholder="제목을 입력해주세요"
          />
        </InputWrapper>
        <InputWrapper>
          <InputName>저자</InputName>
          <StyledInput
            onChange={handleAuthorChange}
            type="text"
            placeholder="저자를 입력해주세요"
          />
        </InputWrapper>
        <InputWrapper>
          <InputName>가격</InputName>
          <StyledInput
            onChange={handlePriceChange}
            type="number"
            placeholder="가격을 입력해주세요"
          />
        </InputWrapper>
        <InputWrapper>
          <InputName>설명</InputName>
          <StyledInput
            onChange={handleDescChange}
            type="text"
            placeholder="설명을 소개해주세요"
          />
        </InputWrapper>
      </Content>
      <BottomButtonsWrapper>
        <Button text="등록" clickFunc={registeBook} disabled={buttonDisabled} />
        <NavigateButton
          disabled={buttonDisabled}
          text="책 목록보기"
          clickFunc={() => navigate(ROUTE.LIST)}
        />
      </BottomButtonsWrapper>
    </Wrapper>
  );
}

export default RegistBook;
