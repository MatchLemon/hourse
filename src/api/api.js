import axios from 'axios';

let base = 'http://www.dingshengfangchan.com';

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

export const deletehouse = params => {
    var url = `${base}/api/delete/` + params.houseId
    return axios.delete(url, params);
};

export const savehouse = params => {
    var url = `${base}/api/hourse/create?type=` + params.type;
    return axios.post(url, params);
};

export const edithouse = params => {
    return axios.put(`${base}/api/update`, params);
};

export const gethouseListPage = params => {
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

export const getFrontHouseList = params => {
    var url = `${base}/api/front/hourses/` + params.typeId
     + '?pageNumber=' + params.pageNumber
     + '&pageSize=' + params.pageSize;
    return axios.get(url);
};

export const getFrontHouseDetail = params => {
    var url = `${base}/api/hourse/` + params.houseId
    return axios.get(url);
};



