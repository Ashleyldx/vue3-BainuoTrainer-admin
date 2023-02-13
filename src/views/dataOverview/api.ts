// 封装接口

import request from '../../utils/request'

const taskOverViewApi = {
    // 企业分布统计
    enterpriseDistribution: 'api/intelligence-records/enterprise-distribution',

    // 监管级别统计
    superviseLevel: 'api/intelligence-records/supervise-level',

    // 监控类型统计
    totalPollutant:'api/map/discharge/pollutant/totalPollutant',
}

class taskOverView {
    // 产业分布
    static enterpriseDistribution(data: any) {
        return request({
            url: taskOverViewApi.enterpriseDistribution,
            method: 'GET',
            json: true,
            data
        }).then((res) => {
            if (res.code === 0 || res.code === '0') {
                return Promise.resolve(res)
            }
            return Promise.reject(res)
        })
    }

// 监管级别统计
    static superviseLevel(data: any) {
        return request({
            url: taskOverViewApi.superviseLevel,
            method: 'GET',
            json: true,
            data
        }).then((res) => {
            if (res.code === 0 || res.code === '0') {
                return Promise.resolve(res)
            }
            return Promise.reject(res)
        })
    }

    // 监管级别统计
    static totalPollutant(data: any) {
        return request({
            url: taskOverViewApi.totalPollutant,
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

export default taskOverView
