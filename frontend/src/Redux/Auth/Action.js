
import { getUserProfileAction } from "../User/Action";

export const signinAction = (data) => async (dispatch) => {
    try {
        const res = await fetch("http://localhost:5454/signin", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Basic " + btoa(data.email + ":" + data.password)
            }
        })
        if (!res.ok) {
            throw new Error(`Sign-in failed with status ${res.status}`);
        }

        const token = res.headers.get("Authorization");
        if (!token) {
            throw new Error("Sign-in response did not include an Authorization token");
        }

        localStorage.setItem("token", token);
        dispatch({ type: "SIGN_IN", payload: token });
        dispatch(getUserProfileAction(token));
    } catch (error) {
        console.error("Sign-in error:", error);
    }
}

export const signupAction = (data) => async (dispatch) => {
    try {
        const res = await fetch("http://localhost:5454/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        const user = await res.json();
        dispatch({ type: "SIGN_UP", payload: user });
    } catch (error) {
        console.error("Sign-up error:", error);
    }
}