// LoginForm.jsx
import React, { useState } from 'react';

const LoginForm = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 로그인 로직을 추가하세요
    if (!id || !pwd) {
      setError('모든 필드를 입력하세요.');
      return;
    }
    // 로그인 로직 예제
    console.log('로그인 시도:', { id, pwd });
    setError('');
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">아이디:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="pwd">비밀번호:</label>
          <input
            type="password"
            id="pwd"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default LoginForm;