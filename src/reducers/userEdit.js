//REDUCER
const userReducer = (state = false, action) => {
    switch (action.type) {
        case "EDIT":
            return !state;
        default:
            return state;
    }
}

export default userReducer;