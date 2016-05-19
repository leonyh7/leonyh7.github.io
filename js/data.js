define(["jquery"], function($) {
	var getJson = function(url) {
		var result;
		$.ajaxSettings.async = false; 
		$.getJSON(url, function(data) {
			result = data;
		});
		return result;
	};
	return {
		getJson: getJson
	}
});