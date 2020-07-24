export const Login = () => {
    return {
        type: 'SIGN_IN',
        payload: true
    };
};
export const Logout = () => {
    return {
        type: 'SIGN_OUT',
        payload: false
    };
};

export const userEdit = () => {
    return {
        type: 'EDIT_IN',
        payload: true
    };
};
export const userEditOut = () => {
    return {
        type: 'EDIT_OUT',
        payload: false
    };
};





export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload: nr
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};