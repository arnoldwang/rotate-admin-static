var _ = require('lodash');

module.exports = {
    "/rotate/data/territory/create": {
        'method': 'post',
        'params': {
            territoryName: 111
        },
        response: "1"
    },

    "/rotate/data/territory/tree": {
        "method": "get",
        "params": {
            "id": 1
        },
        "response": {
            "territoryName": "点评",
            "childrenList": [
                {
                    "id": 1,
                    "territoryName": "上海",
                    "childrenList": [
                        {
                            "id": 3,
                            "territoryName": "长宁",
                            "childrenList": [
                                {
                                    "id": 33,
                                    "territoryName": "中山公园"
                                }
                            ]
                        },
                        {
                            "id": 4,
                            "territoryName": "浦东"
                        }
                    ]
                },
                {
                    "id": 2,
                    "territoryName": "北京",
                    "childrenList": [
                        {
                            "territoryName": "朝阳",
                            "childrenList": [
                                {
                                    "territoryName": "东直门"
                                },
                                {
                                    "territoryName": "东弯门"
                                }
                            ]
                        }
                    ]
                }
            ]
        }        
    }
}