import logo from './logo.svg';
import './App.css';
import Budzet from './page/Budzet';
import Saveti from './page/Saveti';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Budzet />} />
          <Route path="saveti" element={<Saveti />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
