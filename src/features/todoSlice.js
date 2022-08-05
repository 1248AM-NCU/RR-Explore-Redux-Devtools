import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        add: (state, action) => {
            return { items: state.items.concat(action.payload) }
        },
        remove: (state, action) => {
            return { items: [...state].items.slice(action.payload) }
        },
        clear: () => {
            return {items: []}
        }
    }
})
export const { add, remove, clear } = todoSlice.actions

export default todoSlice.reducer