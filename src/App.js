import $ from 'jquery';
import Popper from 'popper.js';
import logo from './logo.svg';
import './App.css';
// import Login from './pages/login';
import Header from './components/Header'
import Home from './pages/Home';
import Rouert from './Routers/Routers';

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Rouert />
    </>
  );
}

export default App;
