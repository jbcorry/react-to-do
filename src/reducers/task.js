import taskList from '../TaskList'

const taskReducer = (state = taskList, action) => {
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