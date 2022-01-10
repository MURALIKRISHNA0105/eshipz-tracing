// import logo from './logo.svg';
// import './App.css';
import Delivered from './Components/Delivered';
import Screen1 from './Components/Screen1';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
     <Routes>
     <Route path="/" element={<Screen1/>}></Route>
      <Route path="/delivered" element={<Delivered/>}></Route>
     </Routes>
     </BrowserRouter>
    {/* <Delivered/> */}
    {/* <Screen1/> */}
    </div>
  );
}

export default App;

