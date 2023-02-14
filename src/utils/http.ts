import request from '@/utils/request'

// eslint-disable-next-line import/prefer-default-export
export const post = (url:any,data?:any) =>request({
    url,
    method: 'post',
    json: true,
    params: data.params,
    data: data.data
}).then((res) => {
    if (res.code === "0"||res.code === 0) {
        return Promise.resolve(res)
    }
    return Promise.reject(res)
})

export const get = (url:any,data?:any) =>request({
    url,
    method: 'get',
    json: true,
    params: data.params
}).then((res) => {
    if (res.code === "0"||res.code === 0) {
        return Promise.resolve(res)
    }
    return Promise.reject(res)
})
