import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_API = 'http://localhost:5000/songes';
const BASE_API_STA = 'http://localhost:5000/statistics';

export const getSongs = createAsyncThunk('songs/get', async () => {
    try {
        const resp = await axios.get(BASE_API);
        return resp.data;
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()

        throw new Error(message);
    }
})

export const updateSong = createAsyncThunk('songs/update', async (song, id) => {
    try {
        console.log(song)
        const resp = await axios.put(`${BASE_API}/${song?._id}`, {
            title: song?.title,
            album: song?.album,
            artist: song?.artist,
            genre: song?.genre,
        });
        return resp.data;
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()

        throw new Error(message);
    }
})

export const createSong = createAsyncThunk('songs/create', async (song) => {
    try {
        console.log(song)
        const resp = await axios.post(`${BASE_API}`, {
            title: song?.title,
            album: song?.album,
            artist: song?.artist,
            genre: song?.genre,
        });
        return resp.data;
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()

        throw new Error(message);
    }
})

export const deleteSong = createAsyncThunk('songs/delete', async (id) => {
    try {
        const resp = await axios.delete(`${BASE_API}/${id}`);
        return resp.data;
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()

        throw new Error(message);
    }
})
export const staticSong = createAsyncThunk('static/get', async (id) => {
    try {
        const resp = await axios.get(`${BASE_API_STA}`);
        return resp.data;
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()

        throw new Error(message);
    }
})
const initialState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    song: []
}

const songSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = '';
            state.message = '';
            state.isSuccess = false;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getSongs.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getSongs.fulfilled, (state, action) => {
                state.isLoading = false
                state.song = action.payload
                state.isSuccess = true
            })
            .addCase(getSongs.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateSong.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateSong.fulfilled, (state, action) => {
                state.isLoading = false
                state.song = action.payload
                state.isSuccess = true
            })
            .addCase(updateSong.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(createSong.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createSong.fulfilled, (state, action) => {
                state.isLoading = false
                state.song = action.payload
                state.isSuccess = true
            })
            .addCase(createSong.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteSong.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteSong.fulfilled, (state, action) => {
                state.isLoading = false
                state.song = action.payload
                state.isSuccess = true
            })
            .addCase(deleteSong.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(staticSong.pending, (state) => {
                state.isLoading = true
            })
            .addCase(staticSong.fulfilled, (state, action) => {
                state.isLoading = false
                state.song = action.payload
                state.isSuccess = true
            })
            .addCase(staticSong.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = songSlice.actions;
export const songReduser = songSlice.reducer;