import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
    'Client-ID esTXwW3T-9bES6oaZAfnTkNkTWDRPFtbBX9EbyEIne8'
  }
});
