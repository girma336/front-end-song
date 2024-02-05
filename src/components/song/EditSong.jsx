import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './EditeSong.css';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { deleteSong, updateSong } from '../../store/songSlice';

const EditSong = ({ songs }) => {
    const [song, setSong] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (songs?.data) {
            const songToUpdate = songs?.data?.find((item) => item._id === id);
            setSong(songToUpdate);
        }
    }, [songs, id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSong((prevSong) => ({ ...prevSong, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateSong(song, id))
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
                <button type="submit">Update Song</button>
            </form>
            <button onClick={handleDelete} className="delete-btn">Delete Song</button>
        </div>
    );
};

export default EditSong;