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
    chartSettings: { 
        chartSeries: {
         type: 'Column'
        },
        tooltip: {
            enableMarker: true,
            textStyle: { color: '#000' },
            fill: '#FFF',
            opacity: 1,
            border: { color: '#000' }
        }
    }
});
pivotTableObj.appendTo('#PivotTable');

