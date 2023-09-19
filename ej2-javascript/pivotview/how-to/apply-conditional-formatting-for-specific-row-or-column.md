---
layout: post
title: Apply conditional formatting for specific row or column in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Apply conditional formatting for specific row or column in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Apply conditional formatting for specific row or column 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Apply conditional formatting for specific row or column in ##Platform_Name## Pivotview control

You can apply conditional formatting for specific row or column using [`label`](https://ej2.syncfusion.com/documentation/api/pivotview/conditionalFormatSettingsModel/#label) option in the pivot table. It can be configured using the [`conditionalFormatSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/conditionalFormatSettingsModel/) option through code behind, during initial rendering. The required settings are:

* [`label`](https://ej2.syncfusion.com/documentation/api/pivotview/conditionalFormatSettingsModel/#label): Specifies the header name to apply conditions for row or column.
* [`conditions`](https://ej2.syncfusion.com/documentation/api/pivotview/conditionalFormatSettingsModel/#conditions): Specifies the operator type such as equals, greater than, less than, etc.
* [`value1`](https://ej2.syncfusion.com/documentation/api/pivotview/conditionalFormatSettingsModel/#value1): Specifies the start value.
* [`value2`](https://ej2.syncfusion.com/documentation/api/pivotview/conditionalFormatSettingsModel/#value2.html): Specifies the end value.
* [`style`](https://ej2.syncfusion.com/documentation/api/pivotview/conditionalFormatSettingsModel/#style): Specifies the style for the cell.

To use the conditional formatting feature, You need to inject the `ConditionalFormatting` module in pivot table.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs71/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs71/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs71" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs71/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs71/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs71" %}
{% endif %}
