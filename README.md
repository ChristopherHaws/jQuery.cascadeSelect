jQuery.cascadeSelect
====================

jQuery plugin that enabled Cascading Select boxes.


Example:<br>
C#:<br>
public class SelectViewModel<br>
{<br>
       public string Value { get; set; }<br>
       public string Label { get; set; }<br>
}<br>


HTML:<br>
<select id='country' data-cascade="true" data-url="@Url.Action("Country", "Home")"></select><br>
<select id='city' data-cascade="true" data-url="@Url.Action("City", "Home")" data-parent="#country"></select><br>


Attributes:<br>
data-cascade: This was the only way I could think of making jQuery find all the cascading drop downs on the page.<br>
data-url: This is the url to the ajax request to get data.<br>
data-parent: This is the parent drop down, plain and simple.<br>
data-default-value: This sets the default value of the select box.<br>
data-selected-value: This sets the selected value of the select box.<br>
data-default-text: This sets the default text for when there is no item selected.<br>
data-method: This is for if you want to use something other than json, ie xml, script, or pure html.<br>
data-type: This would be either “POST” or “GET”, default being “GET”.<br>
