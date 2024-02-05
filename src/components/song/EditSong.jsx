import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './EditeSong.css';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { deleteSong, updateSong } from '../../store/songSlice';

const EditSong = () => {
    const [songs, setSong] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { song } = useSelector(state => state.song)
    useEffect(() => {
        if (song?.data) {
            const songToUpdate = song?.data?.find((item) => item._id === id);
            setSong(songToUpdate);
        }
    }, [song, id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSong((prevSong) => ({ ...prevSong, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateSong(songs, id))
        navigate('/song')
    };
    const handleDelete = () => {
        dispatch(deleteSong(id));
        navigate('/song');
    };
    return (
        <div className='edit-form'>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={songs?.title || ''}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Album:
                    <input
                        type="text"
                        name="album"
                        value={songs?.album || ''}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Artist:
                    <input
                        type="text"
                        name="artist"
                        value={songs?.artist || ''}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Genre:
                    <input
                        type="text"
                        name="genre"
                        value={songs?.genre || ''}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Update Song</button>
            </form>
            <button onClick={handleDelete} className="delete-btn">Delete Song</button>
        </div>
    );
};

export default EditSong;