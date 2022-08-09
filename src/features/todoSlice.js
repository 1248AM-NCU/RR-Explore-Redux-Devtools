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
            var l = [...state.items]
            l.splice(action.payload, 1)
            return { items: [...l] }
        },
        clear: () => {
            return {items: []}
        }
    }
})
export const { add, remove, clear } = todoSlice.actions

export default todoSlice.reducer