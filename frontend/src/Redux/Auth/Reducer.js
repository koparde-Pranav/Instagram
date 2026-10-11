const initialValue = {
    signup: null,
    signin: null
}

export const AuthReducer = (store = initialValue, {type,payload}) => {
    switch (type) {
        case "SIGN_UP":
            return {...store, signup: payload};
        case "SIGN_IN":
            return {...store, signin: payload};
        default:
            return store;
    }
}