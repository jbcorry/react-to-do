const taskReducer = (state = [
    {
        name: 'Clean my room',
        dueBy: 'noon',
    },
    {
        name: 'Finish Taxes',
        dueBy: '4/15'
    },
    {
        name: 'Finish this app',
        dueBy: 'Monday'
    }
], action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return state.push(action.payload);
        case 'DELETE_TASK':
            return state.splice(action.payload, 1);
        default:
            return 0;
    }
}
export default taskReducer;