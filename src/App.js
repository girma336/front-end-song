import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/headers/Header';
import Song from './components/song/Song';
import EditSong from './components/song/EditSong';
import CreateSong from './components/song/CreateSong';
import Home from './components/home/Home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/song" element={<Song />} />
          <Route path="/song/:id" element={<EditSong />} />
          <Route path="/create" element={<CreateSong />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;