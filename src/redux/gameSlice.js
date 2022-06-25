import { createSlice } from '@reduxjs/toolkit'

const _ = require('lodash')

export const gameSlice = createSlice({
    name: 'games',
    initialState: [
        {
            name: "Guerra Geométrica",
            imagePreview: "",
            original: true,
            popular: true,
            favorite: true,
            subscribed: true
        },
        {
            name: "Catch the Apple",
            imagePreview: "",
            original: true,
            popular: false,
            favorite: true,
            subscribed: true
        },
        {
            name: "Ancestros",
            imagePreview: "",
            original: true,
            popular: true,
            favorite: true,
            subscribed: true
        },
        {
            name: "Legacy Hunter",
            imagePreview: "",
            original: true,
            popular: false,
            favorite: false,
            subscribed: false
        },
        {
            name: "Downloaded",
            imagePreview: "",
            original: true,
            popular: true,
            favorite: true,
            subscribed: true
        }
    ],
    reducers: {
        uploadGame(state, action) {
            for (let i = 0; i < state.length; i++) {
                if (_.isEqual(state[i], action.payload) || action.payload.name === '') return
            }
            state.push(action.payload)
        }
    }
})

export const { uploadGame } = gameSlice.actions

// export const selectGameList = (state) => state.games

export default gameSlice.reducer