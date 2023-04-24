

import { PivotView, IDataSet, PivotChart } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';
PivotView.Inject(PivotChart);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        columns: [{ name: 'Year' }, { name: 'Products' }],
        rows: [{ name: 'Country' }, { name: 'Quarter' }],
        formatSettings: [{ name: 'Amount', format: 'C' }],
        values: [{ name: 'Amount' }, { name: 'Sold' }],
        filters: []
    },
    displayOption: { view: 'Chart' },
    chartSettings: {
        enableSmartLabels: false,
        chartSeries: { dataLabel: {visible:true, position: 'Inside' }, type: 'Pyramid' }
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');



