(async (w, d) => {
	const $w = $(w);
	const $b = $(d.body);

	// thumbnail container
	const $portfolioGrid = $('#portfolio-grid');
	const $portfolioWrapper = $('#portfolio-wrapper');

	// templates
	const tOverlay = new t($('#t-portfolio-overlay').html());
	const tImage = new t($('#t-portfolio-image').html());
	const tThumb = new t($('#t-portfolio-thumb').html());

	// Show project overlay.
	function showProject(e) {
		e.preventDefault();
		const $target = $(e.currentTarget);
		const idx = $target.data('idx');
		const project = projects[idx < projects.length ? idx : 0];
		$b.append(tOverlay.render(project));
		$b.addClass('has-overlay');
		showImage(project);
	}

	// Remove project overlay from DOM and remove body classes.
	function closeProject(e) {
		e && e.preventDefault();
		$('#portfolio-overlay').remove();
		$b.removeClass('has-overlay');
	}

	// Show selected image.
	function showImage(project, idx) {
		var $imageContainer = $('#portfolio-wrapper > div:first-child');
		project.image = idx || 1;
		project.imageType = project.imageType || 'jpg';
		$imageContainer.html('').append(tImage.render(project));
	}

	// Close current image and render prev/next image.
	function switchImage(e, prev) {
		var $image = $('#portfolio-overlay img'),
			$target;
		if (e) {
			e.preventDefault();
			$target = $(e.currentTarget);
		}
		if (!$image.length) {
			return;
		}
		var image = $image.data('image'),
			idx = $image.data('idx'),
			project = projects[idx],
			nextImage = prev || ($target && $target.hasClass('prev-img')) ? image-1 : image+1;
		showImage(project, nextImage > project.images ? 1 : (!nextImage ? project.images : nextImage));
	}

	function handleKey(e) {
		// esc - close project
		e.which == 27 && closeProject();
		// space, right or down - next image
		~[32, 39, 40].indexOf(e.which) && switchImage();
		// up or left - prev image
		~[37, 38].indexOf(e.which) && switchImage(null, true);
	}

	// Render thumbnails in grid container.
	projects.forEach((project, idx) => {
		project.idx = idx;
		$portfolioGrid.append(tThumb.render(project));
	});

	// Show project on click of thumbnail.
	$portfolioGrid.on('click', 'a', showProject);

	// Switch images.
	$b.on('click', '#portfolio-overlay > div:first-child a', switchImage);

	// Close portfolio overlay.
	$b.on('click', '.icon-cancel-circled', closeProject);

	// Handle keypresses.
	$w.on('keyup', handleKey);

})(window, document);