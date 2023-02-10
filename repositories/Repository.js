import axios from 'axios';
export const isGrapql = true;
// const baseDomain = 'http://localhost:1337';
// const baseDomain = 'http://137.184.148.224/ecommerce_test/public/api';
// const baseDomain = 'http://142.93.152.229/pss/api';
// const authorization_prefix = 'Bearer ';
export const customHeaders = {
    "Content-Type": 'application/json',
    /* Authorization: authorization_prefix + token || undefined*/
};

export const baseUrl = `/api/`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export async function fetchData(query) {
    const response = await axios({
        method: 'POST',
        url: `${baseDomain}/graphql`,
        headers: customHeaders,
        data: {
            query: query,
        },
    });

    return response;
}

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
