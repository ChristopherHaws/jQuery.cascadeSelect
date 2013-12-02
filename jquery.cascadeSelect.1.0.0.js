/// <reference path="jquery-1.8.2.intellisense.js" />

/*
 * cascadeSelect jQuery Plugin v1.0
 * Christopher Haws
 * Christopher.Haws@arvatousa.com
 * Latest Release: 2013-06-12
 */
; (function ($, window, document, undefined)
{
	$.fn.cascadeSelect = function (url, options)
	{
		var defaults = {
			parent: null,
			defaultValue: "__cascadeSelect__", //__cascadeSelect__
			selectedValue: "__cascadeSelect__", //__cascadeSelect__
			defaultText: "-- Select One --",
			method: "GET",
			dataType: "JSON"
		};

		var options = $.extend(defaults, options);
		var self = $(this);

		// If there is a parent control
		if (options.parent != null)
		{
			var $parent = $(options.parent);
			$parent.removeAttr("disabled", "disabled");
			$parent.bind('change', function (e)
			{
				self.attr("disabled", "disabled");
				if ($(this).val() != options.defaultValue) self.removeAttr("disabled");
				render(self, {
					url: url,
					id: $(this).val(),
					defaultValue: options.defaultValue,
					defaultText: options.defaultText,
					selectedValue: options.selectedValue,
					method: options.method,
					dataType: options.dataType
				});
			});
		}
		// If there is no parent control
		else
		{
			render(self, {
				url: url,
				id: "",
				defaultValue: options.defaultValue,
				defaultText: options.defaultText,
				selectedValue: options.selectedValue,
				method: options.method,
				dataType: options.dataType
			});
		}

		function render(object, options)
		{
			if (options.id == null)
			{
				return false;
			}

			var response = '<option value="' + options.defaultValue + '"' + ((options.id == options.selectedValue) ? ' selected="selected"' : '') + '>' + options.defaultText + '</option>';

			if (((options.id != options.selectedValue)))
			{
				$.ajax({
					type: options.method,
					dataType: options.dataType,
					url: options.url + "/" + options.id,
					success: function(data)
					{
						//var response = '<option value="' + options.defaultValue + '"' + ((options.id == options.selectedValue) ? ' selected="selected"' : '') + '>' + options.defaultText + '</option>';

						var selected;
						for (var index in data)
						{
							selected = (data[index].Value == options.selectedValue) ? ' selected="selected"' : '';
							response += '<option value="' + data[index].Value + '"' + selected + '>' + data[index].Label + '</option>';
						}
						object.html(response);
						object.trigger("change");
					}
				});
			}
			else
			{
				object.html(response);
				object.trigger("change");
			}
		}
	}
})(jQuery, window, document);

$(document).ready(function()
{
	$("select[data-cascade]").each(function ()
	{
		var selectObject = $(this);

		selectObject.cascadeSelect(selectObject.data("url"), {
			parent: selectObject.data("parent"),
			defaultValue: selectObject.data("default-value"),
			selectedValue: selectObject.data("selected-value"),
			defaultText: selectObject.data("default-text"),
			method: selectObject.data("method"),
			dataType: selectObject.data("type"),
		});
	});
});
