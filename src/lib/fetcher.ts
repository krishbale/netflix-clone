import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then(res => res.data);
// console.log(fetcher);
export default fetcher;
