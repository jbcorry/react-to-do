const initState = {
    posts: [
        {id: '1', title: 'test1', body: 'blahblahblahbahasdfasf'},
        {id: '2', title: 'test2', body: 'blahblahblahbahasdfasf'},
        {id: '3', title: 'test3', body: 'blahblahblahbahasdfasf'},
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type == 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id != post.id
        })
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;