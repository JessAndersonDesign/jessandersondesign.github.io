(function(w, d) {
	var $w = $(w),
		$b = $(d.body),
		doc = d.documentElement;

	// Set body.scrolled class if page offset is > zero.
	$w.on('scroll', function() {
		var y = w.pageYOffset || doc.scrollTop;
		$b[!y ? 'removeClass' : 'addClass']('scrolled');
	});

})(window, document);