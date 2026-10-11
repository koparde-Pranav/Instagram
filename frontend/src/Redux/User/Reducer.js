const initialValue = {
    reqUser: null,
    findUserByUsername: null,
    findUsersByUserIds: [],
    searchUser: null,
    updatedUser: null,
    followUser: null,
    unFollowUser: null
}

export const UserReducer = (state = initialValue, { type, payload }) => {
    switch (type) {
        case "REQ_USER":
            return { ...state, reqUser: payload };
        case "FOLLOW_USER":
            return { ...state, followUser: payload };
        case "UNFOLLOW_USER":
            return { ...state, unFollowUser: payload };
        case "GET_USER_BY_USERNAME":
            return { ...state, findUserByUsername: payload };
        case "GET_USERS_BY_USER_IDS":
            return { ...state, findUsersByUserIds: payload };
        case "SEARCH_USER":
            return { ...state, searchUser: payload };
        case "UPDATE_USER":
            return { ...state, updatedUser: payload };
        default:
            return state;
    }
}