var _ = require('lodash');

module.exports = {
    "/territory/children": {
        "method": "get",
        "params": {
            "id": 1
        },
        "response": [
            {
                "id": 1,
                "name": "上海"
            },
            {
                "id": 2,
                "name": "北京"
            }
        ]
    },
    "/territory/descendants": {
        "method": "get",
        "params": {
            "id": 1
        },
        "response": 
        // function() {
        //     var deep = 3;
        //     var children = 3;

        //     var createLevel = function(level) {
        //         if (level === deep) {
        //             return [];
        //         }

        //         return _.times(children, function(i) {
        //             return {
        //                 id: level * deep + i,
        //                 name: 'level=' + level + ',i=' + i,
        //                 children: createLevel(level + 1)
        //             }
        //         })
        //     };

        //     return createLevel(0);
        // }
        [
            {
                "id": 1,
                "name": "上海",
                "children": [
                    {
                        "id": 3,
                        "name": "长宁",
                        "children": [
                            {
                                "id": 33,
                                "name": "中山公园"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "name": "浦东"
                    }
                ]
            },
            {
                "id": 2,
                "name": "北京",
                "children": [
                    {
                        "name": "朝阳",
                        "children": [
                            {
                                "name": "东直门"
                            },
                            {
                                "name": "东弯门"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}