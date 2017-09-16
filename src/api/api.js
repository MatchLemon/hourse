import axios from 'axios';

let base = 'http://172.17.2.146:8080';

export const requestLogin = params => {
    return axios.post(`${base}/api/login`, params).then(
        res => {
            res.data.code = res.data.status;
            return res.data;
        }
        );
    };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => {
    return axios.get(`${base}/api/account`, { params: params });
};

export const removeUser = params => {
    var url = `${base}/api/deleteUser/` + params.id;
    return axios.delete(url, params);
};

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => {
    return axios.post(`${base}/api/account`, params);
};

export const deleteHourse = params => {
    var url = `${base}/api/delete/` + params.hourseId
    return axios.delete(url, {});
};

export const saveHourse = params => {
    return axios.post(`${base}/api/hourse/create`, params);
};

export const edithourse = params => {
    return axios.put(`${base}/api/update`, params);
};

export const getHourseListPage = params => {
    var url = `${base}/api/hourses/` +  params.userId;
    delete params['userId'];
    return axios.post(url, params);
};
export const getQiniuToken = () => {
    var url = `${base}/token/index.php?r=getToken`;
    return axios.get(url);
};

export const getDomain = () => {
    var url = `${base}/token/index.php?r=getDomain`;
    return axios.get(url);
};