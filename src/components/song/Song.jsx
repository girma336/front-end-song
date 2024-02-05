import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Song.css';
import { useNavigate } from 'react-router-dom';
import { getSongs } from '../../store/songSlice';

const Song = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { song } = useSelector((state) => state.song);

    useEffect(() => {
        dispatch(getSongs());
    }, [dispatch]);

    const handleEdit = (id) => {
        navigate(`/song/${id}`);
    };

    return (
        <div>
            <h1 className="song-list-heading">Song List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(song?.data) &&
                        song?.data.map((item, idx) => (
                            <tr key={item._id}>
                                <td>{idx + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.artist}</td>
                                <td>{item.album}</td>
                                <td>{item.genre}</td>
                                <td onClick={() => handleEdit(item._id)}>Edit &#x1F58A;</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Song;