export const todoAdded = (todoText) => {
    return {
        type:'todos/todoAdded',
        payload: todoText
    }
}

export const searchFilterChanged = (searchText) => {
    return {
        type: 'filters/searchFilterChanged',
        payload: searchText
    }
}

export const statusFilterChanged = (filterValue) => {
    return {
        type: 'filters/statusFilterChanged',
        payload: filterValue
    }
}
export const todoToggled  = (todoId) => {
    return {
        type:'todos/todoToggled',
        payload: todoId
    }
}

export const priorityFilterChanged = (priorityValue) => {
    return {
        type: 'filters/priorityFilterChanged',
        payload: priorityValue
    }
}