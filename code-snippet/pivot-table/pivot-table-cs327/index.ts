

import { PivotView, IDataSet, GroupingBar, FieldList } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(GroupingBar, FieldList);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        allowLabelFilter: true,
        allowValueFilter: true,
        columns: [{ name: 'Year', caption: 'Production Year' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }],
        rows: [{ name: 'Country' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: [],
         fieldMapping: [
            { name: 'Quarter', showSortIcon: false },
            { name: 'Products', showFilterIcon: false, showRemoveIcon:false },
            { name: 'Amount', showValueTypeIcon: false, caption: 'Sold Amount' },
        ]
    },
    showGroupingBar: true,
    showFieldList: true,
    height: 340
});
pivotTableObj.appendTo('#PivotTable');



