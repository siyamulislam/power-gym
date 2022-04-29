
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />}/> 
          <Route path="/class" element={<Classes/>}/> 
          <Route path="/pricing" element={<Pricing/>}/> 
          <Route path="/about" element={<NotFound />}/> 
          <Route path="*" element={<NotFound />}/> 

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
