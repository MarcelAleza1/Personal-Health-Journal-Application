const base_url = 'http://localhost:8080/'

const registerUser = async (values) => {
    let response;
    try {
        response = await fetch(`${base_url}api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstname: values.firstName,
                lastname: values.lastName,
                email: values.email,
                password: values.password,
                confirmpassword: values.confirmPassword,
            }),
        })      ;
        return response;

    } catch (e) {
        return e;
    }
}

const loginUser = async (email,password) => {
    let response;
    try {
        response = await fetch(`${base_url}api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        return response;
    } catch (e) {
        return e;
    }
}

const userProfile = async (token) => {
    let response;
    try {
        response = await fetch(`${base_url}api/profile`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "token":token
            },

        });
        return response;
    } catch (e) {
        return e;
    }
}
const authServices = {
    registerUser,
    userProfile,
    loginUser
};
export default authServices