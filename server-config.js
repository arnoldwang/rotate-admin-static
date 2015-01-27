var _ = require('lodash');

module.exports = {
    "/territory": {
        'method': 'post',
        'params': {
            territoryName: 111,
            parentTerritoryId: 11
        },
        response: "1"
    },

    '/territory/:id/base-info': {
        response: {
            "id": 8,
            "bizId": 101,
            "territoryName": "交易平台-普通客户123",
            "parentTerritoryId": 2
        }
    },

    '/territory/:id': {
        method: 'delete',
        response: "11"
    }

}