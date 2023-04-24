

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
        chartSeries: { startAngle: 270, endAngle: 90, type: 'Doughnut' }
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');



