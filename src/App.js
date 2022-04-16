
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />}/> 
          <Route path="/about" element={<NotFound />}/> 
          <Route path="*" element={<NotFound />}/> 

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
