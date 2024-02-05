import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/headers/Header';
import Song from './components/song/Song';
import EditSong from './components/song/EditSong';
import { useEffect } from 'react';
import { getSongs, staticSong } from './store/songSlice';
import CreateSong from './components/song/CreateSong';
import Home from './components/home/Home';

function App() {
  const dispatch = useDispatch();
  const { song } = useSelector(state => state.song)
  useEffect(() => {
    dispatch(getSongs())
    dispatch(staticSong())
  }, [dispatch])
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/song" element={<Song songs={song} />} />
          <Route path="/song/:id" element={<EditSong songs={song} />} />
          <Route path="/create" element={<CreateSong />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;