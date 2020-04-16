import axios from 'axios';

const KEY = 'AIzaSyCRf3fX71rM8dgkmSWYsRuPOOQjSsUTsvM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 7,
        key: KEY
    }
});