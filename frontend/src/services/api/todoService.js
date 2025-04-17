import API from '../api'

export async function addTodo (todoData) {
    try {
        const response = await API.post('/', todoData)
        return response.data
    } catch (error) {
        console.error("An error occurred on adding todo")
        throw error        
    }
}

export async function getTodos () {
    try {
        const response = await API.get('/')
        return response.data
    } catch (error) {
        console.error("An error occurred on getting todos")
        throw error
    }
}

export async function getTodoById (id) {
    try {
        const response = await API.get(`/${id}`)
        return response.data
    } catch (error) {
        console.error('An error occurred on getting todo')
        throw error
    }
}

export async function deleteTodo (id) {
    try {
        await API.delete(`/${id}`)
    } catch (error) {
        console.error("An error occurred on deleting todo")
        throw error
    }
}

export async function updateTodo (id, updatedData) {
    try {
        const response = await API.put(`/${id}`, updatedData)
        return response.data
    } catch (error) {
        console.error("An error occurred on updating todo")
        throw error
    }
}