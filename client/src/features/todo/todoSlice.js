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

export const fetchUpdateTodo = createAsyncThunk("todo/updateTodo", async (id, createBody) => {
    const response = await fetch(`${URL}update-todo/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(createBody)
    })
    const postResponse = response.json()
    return postResponse
})

export const selectTodosList = state => state.todo.todosList
export const selectOneTodo = state => state.todo.oneTodo
export const selectedId = state => state.todo.selectedId

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todosList: [],
        todoCreated: {},
        oneTodo: {},
        selectedId: ""
    },
    reducers: {
        savedId: (state, action) => {
            state.selectedId = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchTodosList.fulfilled, (state, action) => {
            state.todosList = action.payload.payload
        })
        builder.addCase(fetchCreateTodo.fulfilled, (state, action) => {
            state.todoCreated = action.payload
        })
        builder.addCase(fetchOneTodo.fulfilled, (state, action) => {
            state.oneTodo = action.payload.payload
        })
        builder.addCase(fetchUpdateTodo.fulfilled, (state, action) => {
            state.todoCreated = action.payload
        })
    }
})

export const  { savedId } = todoSlice.actions

export default todoSlice.reducer