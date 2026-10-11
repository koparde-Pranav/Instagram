import { CREATE_COMMENT, GET_POST_COMMENTS } from "./ActionType";


const BASE_API = "http://localhost:5454/api";

export const createCommentAction = (data) => async (dispatch) => {
    try {
        const response = await fetch(`${BASE_API}/comments/create/${data.postId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + data.jwt
            },
            body: JSON.stringify(data)
        });

        const comment = await response.json();
        dispatch({ type: CREATE_COMMENT, payload: comment });
    } catch (error) {
        console.log("catch", error);
    }
}

export const findPostCommentAction = (data) => async (dispatch) => {
    try {
        const response = await fetch(`${BASE_API}/comments/${data.postId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + data.jwt
            }
        });

        const comment = await response.json();
        dispatch({ type: GET_POST_COMMENTS, payload: comment });
    } catch (error) {
        console.log("catch", error);
    }
}

export const likeCommentAction = (data) => async (dispatch) => {
    try {
        const response = await fetch(`${BASE_API}/comments/like/${data.commentId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + data.jwt
            }
        });

        const comment = await response.json();
        dispatch({ type: LIKE_COMMENT, payload: comment });
    } catch (error) {
        console.log("catch", error);
    }
}

export const unlikeCommentAction = (data) => async (dispatch) => {
    try {
        const response = await fetch(`${BASE_API}/comments/unlike/${data.commentId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + data.jwt
            }
        });

        const comment = await response.json();
        dispatch({ type: UNLIKE_COMMENT, payload: comment });
    } catch (error) {
        console.log("catch", error);
    }
}
