import { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { createAccount } from '../redux/accountSlice'

function Account({props, account}) {
    const dispatch = useDispatch()

    const initialState = {
        nickname: '',
        name: '',
        number: 0,
        email: '',
        contact: ''
    }
    const [state, setState] = useState(initialState)

    const send = event => {
        event.preventDefault()
        dispatch(createAccount(state))
    }
    const save = event => {
        setState({...state, [event.target.name]: event.target.value})
    }

    if (account.name === '') {
        return (
            <div>
                <h2 className="title">New Account</h2>
                <div id="wrap-middle" className="curve">
                    <form onSubmit={send} className="form-style">
                        <input onChange={save} type="text" name="nickname" placeholder="Nickname" autoComplete="off" />
                    <br></br>
                        <input onChange={save} type="text" name="name" placeholder="Name" autoComplete="off" />
                    <br></br>
                        <input onChange={save} type="text" name="number" placeholder="Phone" autoComplete="off" />
                    <br></br>
                        <input onChange={save} type="text" name="email" placeholder="E-mail" autoComplete="off" className="last-input" />
                    <br></br>
                        <button type="submit">Create Account</button>
                    </form>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h2 className="title">{account.nickname}</h2>

                <div id="wrap-middle" className="curve">
                    <div className="align">
                        <h2 className="title">{account.name}</h2>
                        <br></br>
                        <h2 className="title">{account.number}</h2>
                        <br></br>
                        <h2 className="title">{account.email}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        account: state.account,

        props: props
    }
}

const mapDispatchToProps = {createAccount}

export default connect(mapStateToProps, mapDispatchToProps) (Account)