import { getHeaders } from "./__headers";

const fetchApi = async (method = "GET", API, data = {}) => {
    if (method === "GET") {
        return await fetch(API, { method: method, headers: getHeaders() }).then(res => res.json());
    } else {
        return await fetch(API, { method: method, headers: getHeaders(), body: JSON.stringify(data) }).then(res => res.json());
    }
    // console.log("response dheerendra ", response);
}

export { fetchApi };