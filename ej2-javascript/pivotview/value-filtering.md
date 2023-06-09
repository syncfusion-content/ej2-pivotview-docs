---
layout: post
title: Value filtering in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Value filtering in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Value filtering 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Value filtering in ##Platform_Name## Pivotview control

Value filtering allows you to perform filtering operation to be performed based on the aggregate values. For example, to show the data where the total sum of units sold for each country exceeds 2000, apply a value filter **2000** with filter operator **GreaterThan** on the country field.

Value filtering can be enabled by setting the `allowValueFilter` property to **true**.

## Value filtering through UI

Value filtering can also be performed through the UI option available in the [`grouping bar`](./grouping-bar) and [`field list`](./field-list) at runtime.

## Value filtering through code

It can be configured using the `filterSettings` option through the code-behind. The settings required to filter at initial rendering are:

* `name`: Sets the normal field name.
* `type`: Sets the filter type as **Value** to the field.
* `measure`: Sets the value field name.
* `condition`: Sets the operator type such as equals, greater than, less than, etc.
* `value1`: Sets the start value.
* `value2`: Sets the end value. It is applicable only for the operator such as 'Between' and 'NotBetween'.

Operators that can be used in label filtering are:

| Operator | Description |
|------|-------------|
| Equals| Displays the pivot table that matches with the value.|
| DoesNotEquals| Displays the pivot table that does not match with the given value.|
| GreaterThan| Displays the pivot table when the value is greater.|
| GreaterThanOrEqualTo| Displays the pivot table when the value is greater than or equal.|
| LessThan| Displays the pivot table when the value is lesser.|
| LessThanOrEqualTo| Displays the pivot table when the value is lesser than or equal.|
| Between| Displays the pivot table that records between start and end values.|
| NotBetween| Displays the pivot table that does not record between start and end values.|

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs487/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs487/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs487" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs487/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs487/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs487" %}
{% endif %}

## See Also

* [Member Filtering](./member-filtering)
* [Label Filtering](./label-filtering)