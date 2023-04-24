

import { PivotView, IDataSet, GroupingBar } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(GroupingBar);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: [],
    },
    showGroupingBar: true,
    height: 350,
    dataBound: function(args: ny): void {
            var dataSource = JSON.parse(pivotTableObj.getPersistData()).dataSourceSettings.dataSource;
            var a = document.getElementById('save');
            var mime_type = 'application/octet-stream'; // text/html, image/png, et c
            a.setAttribute('download', 'pivot.JSON');
            a.href = 'data:'+ mime_type +';base64,'+ btoa(JSON.stringify(dataSource) || '');
            document.getElementById('files').addEventListener('change', this.readBlob, false);
        },
        readBlob: function (): void {
        var files = document.getElementById('load').files;
        var file = files[0];
        var start = 0;
        var stop = file.size - 1;
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            if (evt.target.readyState == FileReader.DONE) {
                pivotTableObj.dataSource = JSON.parse(evt.target.result);
            }
        };
        var blob = file.slice(start, stop + 1);
        reader.readAsBinaryString(blob);
        }
});
pivotTableObj.appendTo('#PivotTable');



