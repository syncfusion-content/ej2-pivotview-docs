---
layout: post
title: How to in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about How to in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: How to 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to in ##Platform_Name## Pivotview control

## Member Editor

### Load limited data in Member Editor

In the filter dialog, you can set the limit to display the field values while loading large data. Based on this limit, the initial loading will complete quickly without any performance constraint. You can use the search option to refine the field values from the exceeded limit and refine the data further. A message with the remaining data count will be displayed in the member editor. The data limit can be set in the `maxNodeLimitInEditor` property.

By default, the property holds the value 1000.

> The property is available in both Pivot Grid and Field List components.

In the following example, the limit of data in the member editor is set to 100. So, the member editor of the `ProductID` field shows only its first 100 members from its 1000 members.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-grid/pivot-grid-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-grid/pivot-grid-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/pivot-grid-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-grid/pivot-grid-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-grid/pivot-grid-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-grid/pivot-grid-cs1" %}
{% endif %}