// (C) 2020 GoodData Corporation
import { getTooltipHtml, shouldShowTooltip } from "../geoChartTooltip";

describe("geoChartTooltip", () => {
    describe("getTooltipHtml", () => {
        it("should show tooltip html", () => {
            const geoProperties: GeoJSON.GeoJsonProperties = {
                locationName: {
                    title: "State",
                    value: "Florida",
                },
                size: {
                    title: "Population",
                    value: 111,
                    format: "#,##0.00",
                },
                color: {
                    title: "Area",
                    value: 222,
                    format: "#,##0.00",
                },
                segment: {
                    title: "Age",
                    value: "20-30",
                },
            };
            const tooltipHtml = getTooltipHtml(geoProperties, "rgb(0,0,0)");
            expect(tooltipHtml).toBe(`<div class="gd-viz-tooltip">
                <span class="stroke gd-viz-tooltip-stroke" style="border-top-color: rgb(0,0,0)"></span>
                <div class="content gd-viz-tooltip-content"><div class="gd-viz-tooltip-item">
                <span class="gd-viz-tooltip-title">State</span>
                <div class="gd-viz-tooltip-value-wraper" >
                    <span class="gd-viz-tooltip-value">Florida</span>
                </div>
            </div><div class="gd-viz-tooltip-item">
                <span class="gd-viz-tooltip-title">Population</span>
                <div class="gd-viz-tooltip-value-wraper" >
                    <span class="gd-viz-tooltip-value">111.00</span>
                </div>
            </div><div class="gd-viz-tooltip-item">
                <span class="gd-viz-tooltip-title">Area</span>
                <div class="gd-viz-tooltip-value-wraper" >
                    <span class="gd-viz-tooltip-value">222.00</span>
                </div>
            </div><div class="gd-viz-tooltip-item">
                <span class="gd-viz-tooltip-title">Age</span>
                <div class="gd-viz-tooltip-value-wraper" >
                    <span class="gd-viz-tooltip-value">20-30</span>
                </div>
            </div></div>
            </div>`);
        });

        it("should show tooltip html with empty and null value", () => {
            const geoProperties: GeoJSON.GeoJsonProperties = {
                locationName: {
                    title: "State",
                    value: "",
                },
                size: {
                    title: "Population",
                    value: NaN,
                    format: "#,##0.00",
                },
                color: {
                    title: "Area",
                    value: null,
                    format: "#,##0.00",
                },
            };
            const tooltipHtml = getTooltipHtml(geoProperties, "rgb(0,0,0)");
            expect(tooltipHtml).toBe(`<div class="gd-viz-tooltip">
                <span class="stroke gd-viz-tooltip-stroke" style="border-top-color: rgb(0,0,0)"></span>
                <div class="content gd-viz-tooltip-content"><div class="gd-viz-tooltip-item">
                <span class="gd-viz-tooltip-title">State</span>
                <div class="gd-viz-tooltip-value-wraper" >
                    <span class="gd-viz-tooltip-value">N/A</span>
                </div>
            </div><div class="gd-viz-tooltip-item">
                <span class="gd-viz-tooltip-title">Population</span>
                <div class="gd-viz-tooltip-value-wraper" >
                    <span class="gd-viz-tooltip-value">N/A</span>
                </div>
            </div><div class="gd-viz-tooltip-item">
                <span class="gd-viz-tooltip-title">Area</span>
                <div class="gd-viz-tooltip-value-wraper" >
                    <span class="gd-viz-tooltip-value">N/A</span>
                </div>
            </div></div>
            </div>`);
        });

        it("should return escaped tooltip html", () => {
            const geoProperties: GeoJSON.GeoJsonProperties = {
                locationName: {
                    title: "<button>State</button>",
                    value: "<span>Florida</span>",
                },
                size: {
                    title: '<script>alert("Population")</script>',
                    value: 111,
                    format: "#,##0.00",
                },
            };
            const tooltipHtml = getTooltipHtml(geoProperties, "rgb(0,0,0)");
            expect(tooltipHtml).toBe(`<div class="gd-viz-tooltip">
                <span class="stroke gd-viz-tooltip-stroke" style="border-top-color: rgb(0,0,0)"></span>
                <div class="content gd-viz-tooltip-content"><div class="gd-viz-tooltip-item">
                <span class="gd-viz-tooltip-title">&lt;button&gt;State&lt;/button&gt;</span>
                <div class="gd-viz-tooltip-value-wraper" >
                    <span class="gd-viz-tooltip-value">&lt;span&gt;Florida&lt;/span&gt;</span>
                </div>
            </div><div class="gd-viz-tooltip-item">
                <span class="gd-viz-tooltip-title">&lt;script&gt;alert(&quot;Population&quot;)&lt;/script&gt;</span>
                <div class="gd-viz-tooltip-value-wraper" >
                    <span class="gd-viz-tooltip-value">111.00</span>
                </div>
            </div></div>
            </div>`);
        });
    });

    describe("shouldShowTooltip", () => {
        it("should not show tooltip", () => {
            expect(shouldShowTooltip(undefined)).toBe(false);
        });

        it("should not show tooltip with empty geo props", () => {
            expect(shouldShowTooltip({})).toBe(false);
        });

        it("should show tooltip with location text ", () => {
            const geoProperties: GeoJSON.GeoJsonProperties = {
                locationName: {
                    title: "State",
                    value: "Florida",
                },
            };
            expect(shouldShowTooltip(geoProperties)).toBe(true);
        });

        it("should show tooltip with size and color measures", () => {
            const geoProperties: GeoJSON.GeoJsonProperties = {
                size: {
                    title: "Population",
                    value: 111,
                },
                color: {
                    title: "Age",
                    value: 222,
                },
            };
            expect(shouldShowTooltip(geoProperties)).toBe(true);
        });
    });
});
