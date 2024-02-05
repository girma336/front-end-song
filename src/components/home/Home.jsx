import React, { useEffect } from 'react'
import './Home.css';
import { useSelector, useDispatch } from 'react-redux';
import { staticSong } from '../../store/songSlice';
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js/auto';
import generateColors from '../../utile/color';
import { Bar } from 'react-chartjs-2'
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(staticSong())
    }, [dispatch])
    const { song } = useSelector(state => state.song);
    console.log(song)
    const data = {
        labels: ['Artists', 'Albums', 'Genres', 'Songs'],
        datasets: [
            {
                label: 'Song Statistics',
                data: [song?.totalArtists?.length, song?.totalAlbums?.length, song?.totalGenres?.length, song?.totalSongs],
                backgroundColor: generateColors(4),
                borderColor: generateColors(4),
                borderWidth: 1,
            },
        ],
    };
    const data2 = {
        labels: song?.songsByAlbum?.map(item => item._id),
        datasets: [
            {
                label: 'Songs By Album',
                data: song?.songsByAlbum?.map(item => item.count),
                backgroundColor: generateColors(36),
                borderColor: generateColors(36),
                borderWidth: 1,
            },
        ],
    };

    const data3 = {
        labels: song?.songsByArtist?.map(item => item._id),
        datasets: [
            {
                label: 'Songs By Artists',
                data: song?.songsByArtist?.map(item => item.count),
                backgroundColor: generateColors(100),
                borderColor: generateColors(100),
                borderWidth: 1,
            },
        ],
    };
    const data4 = {
        labels: song?.songsByGenre?.map(item => item._id),
        datasets: [
            {
                label: 'Songs By Genre',
                data: song?.songsByGenre?.map(item => item.count),
                backgroundColor: generateColors(100),
                borderColor: generateColors(100),
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                stepSize: 1,
            },
        },
    };

    return (
        <div className="bar__element">
            <div className='bar-static'>
                <Bar data={data} options={options} />
            </div>
            <div className='bar-static'>
                <Bar data={data2} options={options} />
            </div>
            <div className='bar-static'>
                <Bar data={data3} options={options} />
            </div>
            <div className='bar-static'>
                <Bar data={data4} options={options} />
            </div>
        </div>
    )
}

export default Home