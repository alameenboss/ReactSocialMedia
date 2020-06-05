const movList = [
    { name: 'Raja Rani', category: 'Comedy' },
    { name: 'VIP', category: 'Action' },
    { name: 'Test', category: 'Thriller' }];


const movieReducer = (state = movList, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            //state.push(action.payload);
            return [...state, action.payload];
        case 'REMOVE_MOVIE':
            state = [...state];
            state.splice(state.indexOf(action.payload), 1);
            return state;
        default:
            return state;
    }
}

export default movieReducer;