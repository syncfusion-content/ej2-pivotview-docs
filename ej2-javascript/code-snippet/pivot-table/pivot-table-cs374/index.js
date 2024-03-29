var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Products' }],        
        filters:[{ name: 'Country' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }]
    },
    height: 350,
    showFieldList: true,
    showGroupingBar:true
});
pivotTableObj.appendTo('#PivotTable');

