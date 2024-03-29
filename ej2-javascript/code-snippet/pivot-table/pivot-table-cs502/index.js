var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    height: 350,
    displayOption: { view: 'Chart' },
    chartSettings: { chartSeries: { type: 'Column' }, palettes: ["#E94649", "#F6B53F", "#6FAAB0", "#C4C24A"] },
});
pivotTableObj.appendTo('#PivotTable');

