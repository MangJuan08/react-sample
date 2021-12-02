import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Container } from 'reactstrap';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Users from './pages/Users';

function App() {
  return (
    <BrowserRouter>
    <NavMenu/>
    <Container>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
