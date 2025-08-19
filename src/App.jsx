import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Downloads from './pages/Downloads/Downloads';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/downloads" element={<Downloads />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
