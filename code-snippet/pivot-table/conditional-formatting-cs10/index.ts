

import { PivotView, ConditionalFormatting, IDataSet } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(ConditionalFormatting);
let pivotTableObj: PivotView = new PivotView({
           dataSourceSettings: {
            dataSource: pivotData,
            expandAll: false,
            enableSorting: true,
            drilledMembers: [{ name: 'Country', items: ['France', 'Germany'] }],
            columns: [{ name: 'Year' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            values: [{ name: 'Amount', caption: 'Sold Amount' },
            { name: 'Sold', caption: 'Units Sold' }],
            filters: [],
            conditionalFormatSettings: [
                {
                    value1: 500,
                    conditions: 'GreaterThan',
                    style: {
                        backgroundColor: '#80cbc4',
                        color: 'black',
                        fontFamily: 'Tahoma',
                        fontSize: '12px'
                    }
                }
            ]
        },
        allowConditionalFormatting: true,
        height: 320
});

pivotTableObj.appendTo('#PivotTable');



