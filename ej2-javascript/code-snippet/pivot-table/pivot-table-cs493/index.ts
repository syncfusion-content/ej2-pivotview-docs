

import {
    PivotView, FieldList, CalculatedField, Toolbar, IDataSet, PDFExport, PivotActionBeginEventArgs
} from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(FieldList, CalculatedField, Toolbar, PDFExport);

let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        enableSorting: true,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        sortSettings: [{ name: 'Country', order: 'Descending' }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: []
    },
    height: 350,
    actionBegin: function (args: PivotActionBeginEventArgs) {
        if (args.actionName == 'PDF export') {
            args.cancel = true;
            pivotTableObj.pdfExport({}, false, null, false, true);
        }
    },
    toolbar: ['Grid', 'Chart', 'Export', 'FieldList'],
    allowPdfExport: true,
    showToolbar: true,
    displayOption:{ view:'Both' },
    allowCalculatedField: true,
    showFieldList: true,
    gridSettings: { columnWidth: 140 }
});
pivotTableObj.appendTo('#PivotTable');



