// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        executionResult: {
            data: [
                ["40652", "41013", "40630", "40633"],
                ["42613", "41515", "41380", "42794"],
                ["36525", "36525", "36525", "36525"],
                ["44195", "44195", "44195", "44195"],
            ],
            paging: {
                count: [4, 4],
                offset: [0, 0],
                total: [4, 4],
            },
            headerItems: [
                [
                    [
                        {
                            measureHeaderItem: {
                                name: "_Close [BOP]",
                                order: 0,
                            },
                        },
                        {
                            measureHeaderItem: {
                                name: "_Close [EOP]",
                                order: 1,
                            },
                        },
                        {
                            measureHeaderItem: {
                                name: "_Timeline [BOP]",
                                order: 2,
                            },
                        },
                        {
                            measureHeaderItem: {
                                name: "_Timeline [EOP]",
                                order: 3,
                            },
                        },
                    ],
                ],
                [
                    [
                        {
                            attributeHeaderItem: {
                                name: "Direct Sales",
                                uri: "/gdc/md/" + projectId + "/obj/1026/elements?id=1226",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                name: "Direct Sales",
                                uri: "/gdc/md/" + projectId + "/obj/1026/elements?id=1226",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                name: "Inside Sales",
                                uri: "/gdc/md/" + projectId + "/obj/1026/elements?id=1234",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                name: "Inside Sales",
                                uri: "/gdc/md/" + projectId + "/obj/1026/elements?id=1234",
                            },
                        },
                    ],
                    [
                        {
                            attributeHeaderItem: {
                                name: "East Coast",
                                uri: "/gdc/md/" + projectId + "/obj/1023/elements?id=1225",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                name: "West Coast",
                                uri: "/gdc/md/" + projectId + "/obj/1023/elements?id=1237",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                name: "East Coast",
                                uri: "/gdc/md/" + projectId + "/obj/1023/elements?id=1225",
                            },
                        },
                        {
                            attributeHeaderItem: {
                                name: "West Coast",
                                uri: "/gdc/md/" + projectId + "/obj/1023/elements?id=1237",
                            },
                        },
                    ],
                ],
            ],
        },
    };
};
