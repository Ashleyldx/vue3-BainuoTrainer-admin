import request from '../../utils/request'

const servicetaskinfoApi = {
    // 任务查询列表
    getTaskList: '/api/butlerservice/servicetaskinfo/getTaskList',

    // 任务总览查询-时间柱状图显示--柱状图2
    taskTypeInfo: '/api/butlerservice/servicetaskinfo/searchTaskTypeInfo',

}

class servicetaskinfoClass {
    // 任务总览查询列表
    static getTaskList(data: any) {
        return request({
            url: servicetaskinfoApi.getTaskList,
            method: 'POST',
            json: true,
            data
        }).then((res) => {
            if (res.code === 0 || res.code === '0') {
                return Promise.resolve(res)
            }
            return Promise.reject(res)
        })
    }



}

export default servicetaskinfoClass
