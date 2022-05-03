
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Classes from './components/Classes/Classes';
import Pricing from './components/Pricing/Pricing';
import MemberShip from './components/Classes/MemberShip/MemberShip';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />}/> 
          <Route path="/class" element={<Classes/>}/> 
          <Route path="/price" element={<Pricing/>}/> 
          <Route path="/price/member-ship" element={<MemberShip/>}/> 
          <Route path="/about" element={<NotFound />}/> 
          <Route path="*" element={<NotFound />}/> 

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
