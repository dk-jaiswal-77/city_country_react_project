// import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Main from './components/mainPage/MainPage';
import AddCity from './components/city/AddCity';
import AddCountry from './components/Country/AddCountry';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={< Main />} />
        <Route path='/add-country' element={< AddCountry />} />
        <Route path='/add-city' element={< AddCity />} />
      </Routes>
    </div>
  );
}

export default App;
