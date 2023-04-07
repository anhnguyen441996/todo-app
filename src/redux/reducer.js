const initialState = {
    todos: [
        { id: 0, text: 'Learn React', completed: true, priority: 'High' },
        { id: 1, text: 'Learn Redux', completed: false, priority: 'Medium' },
        { id: 2, text: 'Build something fun!', completed: false, priority: 'Low' }
    ],
    filters: {
        status: 'All',
        search: '',
        priorities: []
    }
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'todos/todoAdded': {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        }
        case 'filters/searchFilterChanged' : {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: action.payload
                }
            }
        }

        case 'filters/statusFilterChanged': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    status: action.payload
                }
            }
        }

        case 'todos/todoToggled': {
           return {
            ...state,
            todos: state.todos.map((todo) => {
                console.log(todo.id);
                if(todo.id != action.payload){
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
           }
        }

        case 'filters/priorityFilterChanged' :{
            return {
                ...state,
                filters: {
                    ...state.filters,
                    priorities:[
                        ...action.payload
                    ]
                }
            }
        }
        default:
            return state;
    }
}

export default rootReducer;