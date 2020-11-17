import axios from 'axios';
const getAllPictures = (serachvalue) =>{
    return axios.get(`https://api.giphy.com/v1/gifs/search?api_key=3gVV7qYr3k5ReRbBBVh0555RnbqFCTW0&q=${serachvalue}`);
};

export { getAllPictures };

