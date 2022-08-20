import url from "../../components/backend-server-url"

export const checkAuth = () => {
    const url = `${url.baseUrl}/api/v1/token/verify/`;
    // this is just pseudo code to give you an idea of how to do it
    someRequestMethod(url, (resp) => {
        if (resp.status === 200 && resp.data.isAuthenticated === true) {
            setCookie(STORAGE_KEY, resp.data.token);
        }
    });
}