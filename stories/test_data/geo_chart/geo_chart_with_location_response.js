// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        executionResponse: {
            links: {
                executionResult:
                    "/gdc/app/projects/storybook/executionResults/fb6486b23cfcfb71d2102e51340378df?dimensions=1",
            },
            dimensions: [
                {
                    headers: [
                        {
                            attributeHeader: {
                                identifier: "30.df",
                                uri: "/gdc/md/" + projectId + "/obj/30.df",
                                name: "City",
                                localIdentifier: "location",
                                formOf: {
                                    uri: "/gdc/md/" + projectId + "/obj/30",
                                    identifier: "30",
                                    name: "City",
                                },
                            },
                        },
                    ],
                },
            ],
        },
    };
};
