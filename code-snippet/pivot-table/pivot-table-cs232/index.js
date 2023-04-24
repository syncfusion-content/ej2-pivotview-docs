var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    gridSettings: {
        columnRender: function(args) {
            if(args.stackedColumns[0]){
                // Content for the row headers is right-aligned here.
                args.stackedColumns[0].textAlign="Right";
            }
            if(args.stackedColumns[1]){
                // Content for the column header "FY 2015" is center-aligned here.
                args.stackedColumns[1].textAlign = 'Center';
            }
            if(args.stackedColumns[1] && args.stackedColumns[1].columns[0]){
                // Content for the column header "Q1" is right-aligned here.
                args.stackedColumns[1].columns[0].textAlign = 'Right';
            }
            if(args.stackedColumns[1] && args.stackedColumns[1].columns[0] && args.stackedColumns[1].columns[0].columns[0]){
                // Content for the value header "Units Sold" is right-aligned here.
                args.stackedColumns[1].columns[0].columns[0].headerTextAlign = 'Right';
            }
            if(args.stackedColumns[1] && args.stackedColumns[1].columns[0] && args.stackedColumns[1].columns[0].columns[0]){
                // Content for the values are left-aligned here.
                args.stackedColumns[1].columns[0].columns[0].textAlign = 'Left';
            }
        }
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');


