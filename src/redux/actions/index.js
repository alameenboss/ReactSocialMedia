export const increment = (number) => {
    return {
        type : 'INCREMENT',
        payload : number
    }
}

export const decrement = () => {
    return {
        type : 'DECREMENT'
    }
}

export const login = () => {
    return {
        type : 'SIGN_IN'
    }
}

export const addMovie = (movie) => {
    return {
        type : 'ADD_MOVIE',
        payload : movie
    }
}

export const removeMovie = (number) => {
    return {
        type : 'REMOVE_MOVIE',
        payload : number
    }
}

export const menuClick = (menuName) => {

    return {
        type : 'MENU_CLICKED',
        payload : menuName
    }
}