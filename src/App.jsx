
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quejas from './pages/Quejas';
import Encuesta from './pages/Encuesta';
import Coco from './pages/Coco';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/encuesta" element={<Encuesta />} />
        <Route path="/quejas" element={<Quejas />} />
        <Route path="/coco" element={<Coco />} />
      </Routes>
    </BrowserRouter>
      
  );
};

export default App;
