var _ = require('lodash');

module.exports = {
    "/rotate/data/territory/tree": {
        "method": "get",
        "params": {
            "id": 1
        },
        "response": 
        // function() {
        //     var deep = 3;
        //     var childrenList = 3;

        //     var createLevel = function(level) {
        //         if (level === deep) {
        //             return [];
        //         }

        //         return _.times(childrenList, function(i) {
        //             return {
        //                 id: level * deep + i,
        //                 name: 'level=' + level + ',i=' + i,
        //                 childrenList: createLevel(level + 1)
        //             }
        //         })
        //     };

        //     return createLevel(0);
        // }
        {
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