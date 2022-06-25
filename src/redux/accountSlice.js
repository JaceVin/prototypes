import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
    name: 'account',
    initialState: {
        nickname: '',
        name: '',
        number: '',
        email: '',
        contact: ''
    },
    reducers: {
        createAccount(state, action) {
            state.nickname = action.payload.nickname
            state.name = action.payload.name
            state.number = action.payload.number
            state.email = action.payload.email
            state.contact = action.payload.contact
        }
    }
})

export const {createAccount} = accountSlice.actions

// export const selectAccount = (state, search) => {
//     for (let account in state.accounts) {
//         if (account.email === search.email) return account
//     }
//     return null
// }

export default accountSlice.reducer