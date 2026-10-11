import { CREATE_NEW_POST } from "./ActionType";
import { GET_USER_POST } from "./ActionType";
import { LIKE_POST } from "./ActionType";
import { UNLIKE_POST } from "./ActionType";
import { SAVE_POST } from "./ActionType";
import { UNSAVE_POST } from "./ActionType";
import { GET_SINGLE_POST } from "./ActionType";
import { DELETE_POST } from "./ActionType";
import { REQ_USER_POST } from "./ActionType";

const BASE_URL = "http://localhost:5454/api";

export const createPostAction = (data) => async (dispatch) => {

    try {
        const res = await fetch(`${BASE_URL}/posts/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            },
            body: JSON.stringify(data.data),
        })
        const post = await res.json();
        console.log("Post Created : ", post);
        dispatch({ type: CREATE_NEW_POST, payload: post });
    } catch (error) {
        console.log("catch", error);
    }
}

export const findUserPostAction = (data) => async (dispatch) => {

    try {
        const res = await fetch(`${BASE_URL}/posts/following/${data.userIds}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            },
        })
        const posts = await res.json();
        console.log("User Posts : ", posts);
        dispatch({ type: GET_USER_POST, payload: posts });
    } catch (error) {
        console.log("catch", error);
    }
}

export const reqUserPostAction = (data) => async (dispatch) => {

    try {
        const res = await fetch(`${BASE_URL}/posts/following/${data.userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            },
        })
        const post = await res.json();
        console.log("User Posts : ", post);
        dispatch({ type: REQ_USER_POST, payload: post });
    } catch (error) {
        console.log("catch", error);
    }
}

export const likePostAction = (data) => async (dispatch) => {

    try {
        const res = await fetch(`${BASE_URL}/posts/like/${data.postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            },
        })
        const post = await res.json();
        console.log("Post Liked : ", post);
        dispatch({ type: LIKE_POST, payload: post });
    } catch (error) {
        console.log("catch", error);
    }
}

export const unlikePostAction = (data) => async (dispatch) => {

    try {
        const res = await fetch(`${BASE_URL}/posts/unlike/${data.postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            },
        })
        const post = await res.json();
        console.log("Post Unliked : ", post);
        dispatch({ type: UNLIKE_POST, payload: post });
    } catch (error) {
        console.log("catch", error);
    }
}

export const savePostAction = (data) => async (dispatch) => {

    try {
        const res = await fetch(`${BASE_URL}/posts/save_post/${data.postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            },
        })
        const post = await res.json();
        console.log("Post Saved : ", post);
        dispatch({ type: SAVE_POST, payload: post });
    } catch (error) {
        console.log("catch", error);
    }
}

export const unsavePostAction = (data) => async (dispatch) => {

    try {
        const res = await fetch(`${BASE_URL}/posts/unsave_post/${data.postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            },
        })
        const post = await res.json();
        console.log("Post Unsaved : ", post);
        dispatch({ type: UNSAVE_POST, payload: post });
    } catch (error) {
        console.log("catch", error);
    }
}

export const findPostByIdAction = (data) => async (dispatch) => {

    try {
        const res = await fetch(`${BASE_URL}/posts/${data.postId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            },
        })
        const post = await res.json();
        console.log("Post Found : ", post);
        dispatch({ type: GET_SINGLE_POST, payload: post });
    } catch (error) {
        console.log("catch", error);
    }
}

export const deletePostByIdAction = (data) => async (dispatch) => {

    try {
        const res = await fetch(`${BASE_URL}/posts/delete/${data.postId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            },
        })
        const post = await res.json();
        console.log("Post Deleted : ", post);
        dispatch({ type: DELETE_POST, payload: post });
    } catch (error) {
        console.log("catch", error);
    }
}