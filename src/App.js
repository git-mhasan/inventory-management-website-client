// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Header from './components/Shared/Header/Header';
import Inventories from './components/Pages/Inventories/Inventories';
import SingleItem from './components/Pages/SingleItem/SingleItem';
import Login from './components/Pages/Login/Login';
import NotFound from './components/Shared/NotFound/NotFound';
import SignUp from './components/Pages/SignUp/SignUp';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventories" element={<Inventories />} />
        <Route path="/inventory/:id" element={<SingleItem />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
