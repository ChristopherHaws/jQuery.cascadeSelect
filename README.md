jQuery.cascadeSelect
====================

jQuery plugin that enabled Cascading Select boxes.


Example
-------
C#:  
```C#
public class SelectViewModel
{
       public string Value { get; set; }
       public string Label { get; set; }
}
```

HTML:
```HTML
<select id='country' data-cascade="true" data-url="@Url.Action("Country", "Home")"></select>
<select id='city' data-cascade="true" data-url="@Url.Action("City", "Home")" data-parent="#country"></select>
```

Attributes
----------
* **data-cascade:** This was the only way I could think of making jQuery find all the cascading drop downs on the page.
* **data-url:** This is the url to the ajax request to get data.
* **data-parent:** This is the parent drop down, plain and simple.
* **data-default-value:** This sets the default value of the select box.
* **data-selected-value:** This sets the selected value of the select box.
* **data-default-text:** This sets the default text for when there is no item selected.
* **data-method:** This is for if you want to use something other than json, ie xml, script, or pure html.
* **data-type:** This would be either “POST” or “GET”, default being “GET”.

