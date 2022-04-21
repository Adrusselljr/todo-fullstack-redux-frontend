import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const URL = 'http://localhost:3001/todos/'

export const fetchTodosList = createAsyncThunk("todo/fetchTodos", async () => {
    const response = await fetch(`${URL}get-all`)
    const fetchedTodos = response.json()
    return fetchedTodos
})

export const fetchOneTodo = createAsyncThunk("todo/fetchOneTodo", async id => {
    const response = await fetch(`${URL}get-one-todo/${id}`)
    const fetchedTodos = response.json()
    return fetchedTodos
})

export const fetchCreateTodo = createAsyncThunk("todo/createTodo", async createBody => {
    console.log(createBody)
    const response = await fetch(`${URL}create-todo`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(createBody)
    })
    const postResponse = response.json()
    return postResponse
})

export const selectTodosList = state => state.todo.todosList
export const selectOneTodo = state => state.oneTodo

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todosList: [],
        todoCreated: {},
        oneTodo: {}
    },
    extraReducers: builder => {
        builder.addCase(fetchTodosList.fulfilled, (state, action) => {
            state.todosList = action.payload.payload
        })
        builder.addCase(fetchCreateTodo.fulfilled, (state, action) => {
            state.todoCreated = action.payload
        })
        builder.addCase(fetchOneTodo.fulfilled, (state, action) => {
            state.oneTodo = action.payload
        })
    }
})

export default todoSlice.reducer