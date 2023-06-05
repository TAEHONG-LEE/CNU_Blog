import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Post from './pages/Post';
import Resume from './pages/Resume';
import Write from './pages/Write';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Header />}>
          {/* 헤더가 전부를 포함해야한다. */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
          </Route>
          <Route path={"/post/:postId" element={<Post />}></Route>
          {/*todo (3-3) Post 추가*/}
        </Route>
        {/*todo (5-1) Write 추가*/}
      </Routes>
    </Router>
  );
}

export default App;
