import { PivotView, IDataSet } from '@syncfusion/ej2-pivotview';
import { PdfExportProperties } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { pivotData } from './datasource.ts';
import { image } from './image.ts';

let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    allowPdfExport: true,
    height: 320
});
pivotTableObj.appendTo('#PivotTable');

let exportBtn: Button = new Button({ isPrimary: true });
exportBtn.appendTo('#pdf');

document.getElementById('pdf').onclick = function () {
    let pdfExportProperties: PdfExportProperties = {
        header: {
            fromTop: 0,
            height: 130,
            contents: [
                {
                    type: 'Image',
                    src: image,
                    position: { x: 20, y: 10 },
                    size: { height: 100, width: 100 },
                }
            ]
        }
    };
    pivotTableObj.pdfExport(pdfExportProperties);
};
