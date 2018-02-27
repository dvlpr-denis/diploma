import axios from 'axios';
import {apiConstants} from '../constants/api.constants';

export default new class Authorization {
    async login(login, password) {
        const res = await axios.create({
            url: apiConstants.signinUrl,
            method: 'post',
            baseURL: apiConstants.baseUrl,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            data: `username=${login}&password=${password}`
        })();

        return res.data;
    }
}