import fetch from "node-fetch";

const getToken = (): Promise<string> => {
    return fetch()
        .then(res => res.json())
};
