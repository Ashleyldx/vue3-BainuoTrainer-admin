import request from '../../utils/request'

const serviceNetClassApi = {
    // 编辑网络课程
    update: '/api/onlineclass/onlinecourses/update',

    // 新增网络课程
    save: '/api/onlineclass/onlinecourses/save',

    // 删除网络课程
    delete:'/api/onlineclass/onlinecourses/delete',

    // 分页获取网络课程(综合排序)
    getComprehensiveByPage:'/api/onlineclass/onlinecourses/getComprehensiveByPage',

}

class serviceNetClass {
    // 编辑网络课程
    static update(data: any) {
        return request({
            url: serviceNetClassApi.update,
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

// 新增网络课程
    static save(data: any) {
        return request({
            url: serviceNetClassApi.save,
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

    // 删除网络课程
    static delete(data: any) {
        return request({
            url: serviceNetClassApi.delete,
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
    // 分页获取网络课程(综合排序)
    static getComprehensiveByPage(data: any) {
        return request({
            url: serviceNetClassApi.getComprehensiveByPage,
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

export default serviceNetClass
