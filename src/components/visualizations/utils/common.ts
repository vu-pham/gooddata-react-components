// (C) 2007-2018 GoodData Corporation
import setWith = require('lodash/setWith');
import clone = require('lodash/clone');
import includes = require('lodash/includes');
import { Observable } from 'rxjs/Rx';

import { VisualizationTypes } from '../../../constants/visualizationTypes';

// lodash/fp does not provide typings
// https://stackoverflow.com/questions/38020019/where-can-i-find-typescript-typings-for-lodash-fp
/* tslint:disable */
const isEqual = require('lodash/fp/isEqual');
/* tslint:enable */

export function parseValue(value: string) {
    const parsedValue = parseFloat(value);
    return isNaN(parsedValue) ? null : parsedValue;
}

export const immutableSet = (dataSet: any, path: any, newValue: any) => setWith({ ...dataSet }, path, newValue, clone);

export const repeatItemsNTimes = (array: any[], n: number) =>
    new Array(n).fill(null).reduce(result => [...result, ...array], []);

export function subscribeEvent(event: any, debounce: any, func: any, target: any = window): any {
    if (debounce > 0) {
        return Observable
            .fromEvent(target, event)
            .debounceTime(debounce)
            .subscribe(func);
    }

    return Observable
        .fromEvent(target, event)
        .subscribe(func);
}

export function subscribeEvents(func: any, events: any[], target: any = window) {
    return events.map((event: any) => {
        return subscribeEvent(event.name, event.debounce, func, target);
    });
}

export const unEscapeAngleBrackets = (str: string) =>
    str && str.replace(/&lt;|&#60;/g, '<').replace(/&gt;|&#62;/g, '>');

export function getAttributeElementIdFromAttributeElementUri(attributeElementUri: string) {
    const match = '/elements?id=';
    return attributeElementUri.slice(attributeElementUri.lastIndexOf(match) + match.length);
}

export function isRotationInRange(rotation: number, min: number, max: number) {
    return rotation >= min && rotation <= max;
}

export const isTable = isEqual(VisualizationTypes.TABLE);
export const isColumnChart = isEqual(VisualizationTypes.COLUMN);
export const isBarChart = isEqual(VisualizationTypes.BAR);
export const isLineChart = isEqual(VisualizationTypes.LINE);
export const isDualChart = isEqual(VisualizationTypes.DUAL);
export const isScatterPlot = isEqual(VisualizationTypes.SCATTER);
export const isPieChart = isEqual(VisualizationTypes.PIE);
export const isDonutChart = isEqual(VisualizationTypes.DONUT);
export const isPieOrDonutChart = (type: string) => isPieChart(type) || isDonutChart(type);
export const isAreaChart = isEqual(VisualizationTypes.AREA);
export const isBubbleChart = isEqual(VisualizationTypes.BUBBLE);
export const isHeadline = isEqual(VisualizationTypes.HEADLINE);
export const isComboChart = isEqual(VisualizationTypes.COMBO);
export const isTreemap = isEqual(VisualizationTypes.TREEMAP);
export const isFunnelChart = isEqual(VisualizationTypes.FUNNEL);
export const isHeatMap = isEqual(VisualizationTypes.HEATMAP);
export const isChartSupported = (type: string) => includes(VisualizationTypes, type);
export const isOneOfTypes = (type: string, types: string[]) => includes(types, type);
export const stringifyChartTypes = () => Object.keys(VisualizationTypes).reduce((acc, type) => {
    acc.push(VisualizationTypes[type]);
    return acc;
}, []).join(', ');

export function unwrap(wrappedObject: any) {
    return wrappedObject[Object.keys(wrappedObject)[0]];
}
