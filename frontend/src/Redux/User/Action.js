import { REQ_USER } from "./ActionType";
const BASE_API_URL = "http://localhost:5454/api";

export const getUserProfileAction = (jwt) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/users/req`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + jwt
            }
        })

        const reqUser = await res.json();
        dispatch({ type: "REQ_USER", payload: reqUser });
    } catch (error) {
        console.error("Get user profile error:", error);
    }
}

export const findUserByUsernameAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/users/username/${data.username}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            }
        })
        const user = await res.json();
        dispatch({ type: "GET_USER_BY_USERNAME", payload: user });
    } catch (error) {
        console.error("Find user by username error:", error);
    }
}

export const findUserByUserIdsAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/users/m/${data.userIds}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            }
        })
        const users = await res.json();
        dispatch({ type: "GET_USERS_BY_USER_IDS", payload: users });
    } catch (error) {
        console.error("Find user by user IDs error:", error);
    }
}

export const followUserAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/users/follow/${data.userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            }
        })
        const user = await res.json();
        dispatch({ type: "FOLLOW_USER", payload: user });
    } catch (error) {
        console.error("Follow user error:", error);
    }
}

export const unFollowUserAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/users/unfollow/${data.userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            }
        })
        const user = await res.json();
        dispatch({ type: "UNFOLLOW_USER", payload: user });
    } catch (error) {
        console.error("Unfollow user error:", error);
    }
}

export const searchUserAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/users/search?q=${data.query}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            }
        })
        const user = await res.json();
        dispatch({ type: "SEARCH_USER", payload: user });
    } catch (error) {
        console.error("Search user error:", error);
    }
}

export const editUserAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/users/account/edit`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            },
            body: JSON.stringify(data.data)
        })
        const user = await res.json();
        dispatch({ type: "UPDATE_USER", payload: user });
    } catch (error) {
        console.error("Edit user error:", error);
    }
}
