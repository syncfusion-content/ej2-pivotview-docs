---
layout: post
title: Excel export in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Excel export in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Excel export 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Excel export in ##Platform_Name## Pivotview control

The Excel export allows pivot table data to export as Excel document. To enable Excel export in the pivot table, set the `allowExcelExport` as **true**. You need to use the `excelExport` method for Excel exporting.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/excel-export-cs20/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/excel-export-cs20/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/excel-export-cs20" %}

## Multiple pivot table exporting

The Excel export provides an option to export multiple pivot table data in the same Excel file.

### Same WorkSheet

The Excel export provides support to export multiple pivot tables in same sheet. To export in same sheet, define `multipleExport.type` as `AppendToSheet` in `ExcelExportProperties`. It has an option to provide blank rows between pivot tables and these blank row(s) count can be defined using the`multipleExport.blankRows` property.

>By default, `multipleExport.blankRows` value is 5 between pivot tables within the same sheet.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/excel-export-cs21/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/excel-export-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/excel-export-cs21" %}

### New WorkSheet

Excel export provides support to export multiple pivot tables into new sheets. To export in new sheets, define  `multipleExport.type` as `NewSheet` in `ExcelExportProperties`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/excel-export-cs22/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/excel-export-cs22/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/excel-export-cs22" %}

## Changing the pivot table style while exporting

The Excel export provides an option to change colors for headers, caption and records in pivot table before exporting. In-order to apply colors, define **theme** settings in **excelExportProperties** object and pass it as a parameter to the [`excelExport`](https://ej2.syncfusion.com/documentation/api/pivotview/#excelexport) method.

>By default, material theme is applied to exported Excel document.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/excel-export-cs23/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/excel-export-cs23/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/excel-export-cs23" %}

## Add header and footer while exporting

The Excel export provides an option to include header and footer content for the excel document before exporting. In-order to add header and footer, define **header** and **footer** properties in **excelExportProperties** object and pass it as a parameter to the [`excelExport`](https://ej2.syncfusion.com/documentation/api/pivotview/#excelexport) method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/excel-export-cs24/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/excel-export-cs24/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/excel-export-cs24" %}

## Changing the file name while exporting

The Excel export provides an option to change file name of the document before exporting. In-order to change the file name, define **fileName** property in **excelExportProperties** object and pass it as a parameter to the [`excelExport`](https://ej2.syncfusion.com/documentation/api/pivotview/#excelexport) method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/excel-export-cs25/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/excel-export-cs25/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/excel-export-cs25" %}

## Limitation when exporting millions of records to Excel format

By default, Microsoft Excel supports only 1,048,576 records in an excel sheet. Hence it is not possible to export millions of records to excel. You can refer the [documentation](https://support.microsoft.com/en-gb/office/excel-specifications-and-limits-1672b34d-7043-467e-8e27-269d656771c3) link for more details on Microsoft excel specifications and limits. So suggest to export the data in CSV (Comma-Separated Values) or other formats that can handle large datasets more efficiently than Excel.

## CSV Export

Also, the Excel export allows pivot table data to be exported in `CSV` file format. To export pivot table in `CSV` file format, you need to use the `csvExport` method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/excel-export-cs26/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/excel-export-cs26/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/excel-export-cs26" %}

## Virtual Scroll Data

You can export the pivot table virtual scroll data as Excel/CSV document by using PivotEngine export without any performance degradation. To enable PivotEngine export in the pivot table, set the `allowExcelExport` as true. You need to use the `exportToExcel` method for PivotEngine export.

> To use PivotEngine export, You need to inject the `ExcelExport` module in pivot table.
> PivotEngine export will be performed while enabling virtual scrolling by default.

### Virtual Scroll Data Excel Export

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/excel-export-cs27/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/excel-export-cs27/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/excel-export-cs27" %}

### Virtual Scroll Data CSV Export

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/excel-export-cs28/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/excel-export-cs28/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/excel-export-cs28" %}

### Export all pages

The pivot engine exports the entire virtual data of the pivot table (i.e. the data that contains all of the records used to render the complete pivot table) as an Excel/CSV document. To export just the current viewport of the pivot table, set the [`exportAllPages`](https://ej2.syncfusion.com/documentation/api/pivotview/#exportallpages) property to **false**. To use the pivot engine export, add the `ExcelExport` module into the pivot table.

> By default, the pivot engine export will be performed while virtual scrolling is enabled.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/excel-export-cs29/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/excel-export-cs29/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/excel-export-cs29" %}

## Events

### ExcelQueryCellInfo

The event `excelQueryCellInfo` triggers while framing each row and value cell during Excel export. It allows the user to customize the cell value, style etc. of the current cell. It has the following parameters:

* `value` - It holds the cell value.
* `column` -  It holds column information for the current cell.
* `data` - It holds the entire row data across the current cell.
* `style`  - It holds the style properties for the cell.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs353/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs353/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs353" %}

### ExcelHeaderQueryCellInfo

The event `excelHeaderQueryCellInfo` triggers on framing each header cell during Excel export. It allows the user to customize the cell value, style etc. of the current cell. It has the following parameters:

* `cell` - It holds the current cell information.
* `style`  -  It holds the style properties for the cell.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs354/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs354/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs354" %}

### ExportComplete

The event [`exportComplete`](https://ej2.syncfusion.com/documentation/api/pivotview/#exportcomplete) is triggered after the pivot table data has been exported to an Excel/CSV document. You can use this event to acquire blob stream data for further customization and processing at your end by passing the `isBlob` parameter as **true** when using the [`excelExport`](https://ej2.syncfusion.com/documentation/api/pivotview/#excelexport) method. It has the following parameters:

* `type` - It holds the current export type such as PDF, Excel, and CSV.
* `promise` - It holds the promise object for blob data.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/excel-export-cs30/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/excel-export-cs30/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/excel-export-cs30" %}

## See Also

* [PDF Exporting](./pdf-export)