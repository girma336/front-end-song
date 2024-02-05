import React, { useEffect, useState } from 'react';
import './EditeSong.css';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { createSong } from '../../store/songSlice';

const CreateSong = () => {
    const [song, setSong] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSong((prevSong) => ({ ...prevSong, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createSong(song))
        navigate('/song')
    };

    return (
        <div className='edit-form'>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={song?.title || ''}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Album:
                    <input
                        type="text"
                        name="album"
                        value={song?.album || ''}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Artist:
                    <input
                        type="text"
                        name="artist"
                        value={song?.artist || ''}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Genre:
                    <input
                        type="text"
                        name="genre"
                        value={song?.genre || ''}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Create Song</button>
            </form>
        </div>
    );
};

export default CreateSong;