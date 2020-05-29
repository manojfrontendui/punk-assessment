
const baseURL = 'https://api.punkapi.com/v2/'

export const getBeers = async () => {
    const response = await fetch(`${baseURL}beers`);
    return await response.json();
}

export const getBeerDetails = async (beerId) => {
    const response = await fetch(`${baseURL}beers/${beerId}`);
    return await response.json();
}
