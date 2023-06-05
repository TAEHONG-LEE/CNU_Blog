import { Link, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 1rem;
  outline: none;
  font-weight: bold;
  word-break: keep-all;
  background: #fff;
  border: 1px solid rgb(50, 148, 248);
  color: rgb(50, 148, 248);
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
`;

const Header = () => {
  return (
    <div>
      <Wrapper>
        <Link to="/">
          <h2>2t_hong.log</h2>
        </Link>
        <Link to="/write">
          <Button className="write-button">글쓰기</Button>
        </Link>
      </Wrapper>
      <Outlet /> {/* 이걸 선언함으로써 아래의 구성요소들이 Header 밑에 들어간다. */}
    </div>
  );
};

export default Header;
