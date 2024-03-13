---
layout: post
title: Data Compression in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Data Compression in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Data Compression 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

## Data Compression in ##Platform_Name## Pivotview control

> This property is applicable only for relational data source.

When we bind one million raw data, the pivot table will process all raw data to generate aggregated data during initial rendering and report manipulation. But in data compression, the data will be compressed based on the uniqueness of the raw data, and unique records will be provided as input for the Pivot Table. The compressed data will be used for further operations at all times, reducing the looping complexity and improving the performance of the pivot table. For example, if the pivot table  is connected to one million raw data aggregated to 1,000 unique data means, it will be rendered within 3 seconds rather than 10 seconds. You can enable this option by using the [`allowDataCompression`](https://ej2.syncfusion.com/documentation/api/pivotview/#allowdatacompression) property along with [`enableVirtualization`](https://ej2.syncfusion.com/documentation/api/pivotview/#enablevirtualization) property.

> This options will only function when the virtual scrolling is enabled.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs486/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs486/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs486" %}