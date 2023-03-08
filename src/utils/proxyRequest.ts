import axios from 'axios';

const proxy_request = axios.create({
    timeout: 6000,
    headers: { "Content-Type": "application/json;charset=utf-8" },
    // 接口代理地址
});

type requestData = {
    url:string,
    method:string,
    data:any
}

async function request<T extends requestData>(assign:T){
    const {method,data,url} = assign;
    const ret = await proxy_request({
        url,
        method,
        params:data,
        data:data,
    })
    return ret
}
export {
    request
}