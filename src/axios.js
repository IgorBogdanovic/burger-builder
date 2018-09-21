import axios from 'axios';

export const $http = axios.create({
    baseURL: 'https://burger-builder-6eba4.firebaseio.com'
});
