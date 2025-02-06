import { GlobalStyle } from './styles/GlobalStyle';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import My_profile from './pages/My_profile';
import Search from './pages/Search';

import Navbar from './components/Navbar/Navbar';


const Layout = () =>{
  return (
    <>
      <Navbar />
      <Outlet /> 
    </>
  );
};

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/My_profile" element={<My_profile />}/>
          <Route path="/Search" element={<Search />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;