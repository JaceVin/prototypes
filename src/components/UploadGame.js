import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { uploadGame } from '../redux/gameSlice'

function UploadGame() {
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()

    const initialState = {
        name: '',
        imagePreview: '',
        original: params.list === 'Original',
        popular: params.list === 'Popular',
        favorite: params.list === 'Favorite',
        subscribed: params.list === 'Subscribed'
    }
    const [state, setState] = useState(initialState)

    const send = event => {
        event.preventDefault()
        dispatch(uploadGame(state))
        event.target.reset()
        setState(initialState)
    }

    const save = event => {
        setState({...state, [event.target.name]: event.target.value})
    }

    useEffect(() => {
        if (
            !state.original &&
            !state.popular &&
            !state.favorite &&
            !state.subscribed
        ) navigate('home', { replace: true })
    });

    return (
        <div>
            <h2 className="title">Game</h2>
            <div id="wrap-middle" className="curve">
                <form onSubmit={send} className="form-style">
                    <input onChange={save} name="name" placeholder="Game's Name" autoComplete="off" className="last-input" />
                <br></br>
                    <button type="submit">Upload Game</button>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = {uploadGame}

export default connect(null, mapDispatchToProps) (UploadGame)