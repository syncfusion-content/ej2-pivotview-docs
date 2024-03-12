---
layout: post
title: Virtual scrolling in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Virtual scrolling in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Virtual scrolling 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Virtual scrolling in ##Platform_Name## Pivotview control

## Virtual scrolling

Allows to load the large amounts of data without any performance degradation by rendering rows and columns only in the current content viewport. Rest of the aggregated data will be brought into viewport dynamically based on vertical or horizontal scroll position. This feature can be enabled by setting the [`enableVirtualization`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#enablevirtualization) property in pivot table to **true**..

To use the virtual scrolling feature, inject the `VirtualScroll` module in to the pivot table.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs265/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs265/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs265" %}

**Limitations for virtual scrolling**

* In virtual scrolling, the `columnWidth` property in `gridSettings` should be in pixel and percentage values are not accepted.
* Resizing columns, setting width to individual columns which affects the calculation used to pick the correct page on scrolling.
* Grouping, which takes additional time to splitting the raw items into the provided format.
* Date Formatting, which takes additional time to convert date format.
* Date Formatting with sorting, here additionally full date time format should be framed to perform sorting along with the provided date format which lags the performance.
* When using OLAP data, subtotals and grandtotals are only displayed when measures are bound at the last position in the [`rows`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#rows) or [`columns`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#columns) axis. Otherwise, the data from the pivot table will be shown without summary totals.
* Even if virtual scrolling is enabled, not only is the current view port data retrieved, but also the data for the immediate previous page and the immediate next page. As a result, when the end user scrolls slightly ahead or behind, the next or previous page data is displayed immediately without requiring a refresh. **Note:** If the pivot table's width and height are large, the loading data count in the current, previous, and next view ports (pages) will also increase, affecting performance.

## Single Page Mode

When virtual scrolling is enabled, the pivot table renders not only the current view page, but also the previous and next pages by default. This default behavior, however, can cause performance delays when dealing with a large number of rows and columns. This is because the same number of rows and columns from adjacent pages are also processed, resulting in additional computational load. This performance constraint can be avoided by setting the [allowSinglePage](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/virtualScrollSettings/#allowSinglePage) property to **true** within the [virtualScrollSettings](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/virtualScrollSettings/).

Enabling this property causes the pivot table to render only the rows and columns that are relevant to the current view page during virtual scrolling. This optimization significantly improves the performance of the pivot table, particularly in Blazor WASM applications, during initial rendering and when performing UI actions such as drill up/down, sorting, filtering, and more.

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/pivot-table/single-page-mode/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/single-page-mode/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/single-page-mode" %}

**Limitations during data compression**

* The following aggregation types will not be supported.
    * Average
    * Populationstdev
    * Samplestdev
    * Populationvar
    * Samplevar
* If you use any of the aggregations above, it will result in an aggregation type **"Sum"**.
* Distinctcount will act as **"Count"** aggregation type.
* In the calculated field, an existing field can be inserted without altering its default aggregation type Even if we change it, it would use the default aggregation type back for calculation.

## Virtual scrolling for static field list

Virtual scrolling automatically works with "Popup" field list on setting the [`enableVirtualization`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#enablevirtualization) property in the Pivot Table to **true**. Incase of static field list, which act as a separate component, user need to enable [`enableVirtualization`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#enablevirtualization) property in the Pivot Table and also pass the report information to pivot table instance via the [`load`]((https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#load)) event of the field list.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/field-list-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/field-list-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/field-list-cs9" %}

> You can also explore our [Virtual Scrolling in JavaScript PivotTable](https://ej2.syncfusion.com/javascript/demos/#/material/pivot-table/virtual-scrolling.html) that showing a large number of records.