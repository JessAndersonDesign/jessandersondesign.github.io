(function(w, d) {
	var $w = $(w),
		$b = $(d.body),

		// project data
		projects = [
			{
				dir: 'spot-color',
				title: 'Spot Color Marketing',
				type: 'Web Design, Social Media',
				images: 7,
				description: '<p>Here are some samples of the work I completed during my summer internship with Spot Color Marketing. I was able to experience a variety of projects and tasks and really enjoyed my time working there.</p><p>Projects included a graphic to celebrate the fourteen year anniversary of Spot Color Marketing, digital assets for use on social media, and sitemaps and wireframes for website design.</p><p>I was also able to create detailed comps for several websites including one for the State of Oregon\'s Capital History Gateway project.</p>'
			},
			{
				dir: 'girl-scouts',
				title: 'Girl Scouts of Oregon and Southwest Washington',
				type: 'Social Media, Print Collateral',
				images: 3,
				description: '<p>These are examples of some projects I completed while working as an intern for the Girl Scouts of Oregon and Southwest Washington. Each square graphic is for a Facebook post about various events or special theme days and features illustrations from the Girl Scout image library that have been collaged and mixed with typography and photographs.</p><p>I created the recipe cards as part of a large project for the S\'mores themed open house event. I also curated a large Pinterest board with S\'mores recipes and craft ideas.</p><p>The certificates were designed to recognize completion of various training classes, they had to be easy to use and accessible to multiple staff members.</p>' 
			},
			{
				dir: 'crab-lobster',
				title: 'Crab & Lobster',
				type: 'Logo, Branding, Web Design',
				images: 4,
				description: '<p>I designed a logo, website, and various business materials for the Crab & Lobster, a pub in Port Wenn.</p><p>The logo features hand lettering and a playful illustrated crab. This logo matches the casual and simple atmosphere of the pub and is shown in a blue that compliments the pubs waterfront views.</p><p>The printed collateral has a light and open feel that evokes the traditional style of this well established seaside pub.</p><p>A one page website keeps things casual and offers a quick overview of all the basic information customers are looking for.</p>'
			},
			{
				dir: 'infographics',
				title: 'Infographics',
				type: 'Infographic Design, Illustration',
				images: 2,
				description: '<p>These infographics were designed to share a small number of facts about our shower and tv viewing habits. I read several interesting articles about water usage, grooming habits, and what we watch on television.</p><p>Through infographics I was able to condense entire articles into a few interesting facts and share them in an entertaining, easy to read format.</p><p>My hope is that the illustrations engage the viewer and make the facts more memorable.</p>'
			},
			{
				dir: 'magazine',
				title: 'Eco Life Magazine',
				type: 'Branding, Publication Design',
				description: '<p>Eco Life is a magazine created for those who want the Earth to thrive!'
					+ '</p><p>'
					+ 'This magazine features articles on a variety of subjects ranging from finance to health and '
					+ 'beauty. The cover was created using a photograph of a stunning natural beauty combined with brightly '
					+ 'colored typography to highlight the floral elements in the image.'
					+ '</p>',
				tech: '',
				images: 3
			},
			{
				dir: 'whiskey',
				title: '5th Ward',
				type: 'Branding, Packaging, Illustration',
				description: '<p>5th Ward Bourbon Whiskey—a drink to remember.'
					+ '</p><p>'
					+ '5th Ward is a brand I created after reading about “The Whiskey Wars” of 1869.'
					+ '</p><p>The design of the logo and label creates a feeling of the time period with the suited '
					+ 'gentleman and broadsheet style type. The box is dark to compliment the glowing warmth of the whiskey '
					+ 'bottle and features a large photo of whiskey barrels filling a distillery warehouse. Hold this '
					+ 'whiskey in your hand and step back in time to the streets of the 5th ward in Brooklyn, New York. '
					+ '</p>',
				tech: '',
				images: 3
			},
			{
				dir: 'pizza',
				title: 'Pint Slice',
				type: 'Branding, Packaging, Illustration',
				description: '<p>Pint Slice &mdash; great pizza and beer.'
					+ '</p><p>'
					+ 'I designed this restaurant with two of my favorite things in mind, pizza and beer. I’ve used red '
					+ 'and black as a way to strip out excess and showcase the restaurants simplicity. The logo is a fun '
					+ 'combination of pizza and a bottle cap, since Pint Slice is known for their variety of beer on tap '
					+ 'and in bottles. The simple graphics help make Pint Slice a fun and modern pizza experience in a '
					+ 'relaxed environment.'
					+ '</p>',
				tech: '',
				images: 4
			},
			{
				dir: 'mojave',
				title: 'Mojave Motel',
				type: 'Branding, Packaging, Promotion',
				description: '<p>The future of travel &mdash; inspired by the past.'
					+ '</p><p>'
					+ 'This American Southwest motel chain is reinventing road trip vacations. The Mojave logo is inspired '
					+ 'by the name badges of classic cars, inviting us to hit the open road. The scales of the Mojave Green '
					+ 'rattlesnake represent all parts of the desert coming together to make this an exciting destination. '
					+ 'For those seeking adventure as well as a place to unwind and enjoy the beautiful desert sunsets, '
					+ 'Mojave awaits.'
					+ '</p>',
				tech: '',
				images: 8
			},
			{
				dir: 'movie',
				title: 'Classic Horror Film Festival',
				type: 'Branding, Packaging, Promotion, Illustration',
				description: '<p>Three days of frightful films!'
					+ '</p><p>'
					+ 'I designed these pieces for a movie festival at a local historic theater. The poster has all the '
					+ 'charm of a classic horror movie poster from the 1940s, but is updated with a minimal color palette. '
					+ 'The headline is presented in custom lettering inspired by the creepy titles found on  old posters. '
					+ 'The custom popcorn tub features an illustrated Rondo Hatton, a character actor from classic horror '
					+ 'movies.'
					+ '</p>',
				tech: '',
				images: 3
			},
			{
				dir: 'tea',
				title: 'Royal Tea',
				type: 'Branding, Packaging, Illustration',
				description: '<p>Royal Tea was created to showcase the classic flavor of Earl Grey.'
					+ '</p><p>'
					+ 'I wanted to take a well known, sophisticated tea and make it fun and relaxed. An illustrated fancy '
					+ 'teaspoon, repeated at a small size, is whimsical and iconic. The limited color palette evokes the '
					+ 'Union Jack flag while the clean, vibrant look compliments the Bergamot Orange flavor in Earl Grey tea.'
					+ '</p>',
				tech: '',
				images: 3
			},
			{
				dir: 'illustrations',
				title: 'Various Illustrations',
				type: 'Illustrations',
				images: 11,
				description: 'A collection of various styled portraits of tv characters, whimsical holiday illustrations, and even an illustration for the Portland, OR Division & Clinton Street Fair! You can see more of these projects on <a href="http://behance.com/jessandersondesign">Behance</a>.'
			},
			{
				dir: 'packaging',
				title: 'Various Packaging',
				type: 'Package Design',
				images: 6,
				description: 'Various products including health and beauty, craft supplies, canned goods, and vinyl records. You can see more of these projects on <a href="http://behance.com/jessandersondesign">Behance</a>.'
			}
		],

		// thumbnail container
		$portfolioGrid = $('#portfolio-grid'),

		// templates
		tOverlay = new t($('#t-portfolio-overlay').html()),
		tImage = new t($('#t-portfolio-image').html()),
		tThumb = new t($('#t-portfolio-thumb').html()),

		// Show project overlay.
		showProject = function(e) {
			e.preventDefault();
			var $target = $(e.currentTarget),
				idx = $target.data('idx'),
				project = projects[idx < projects.length ? idx : 0];
			$b.append(tOverlay.render(project));
			$b.addClass('has-overlay');
			showImage(project);
		},

		// Remove project overlay from DOM and remove body classes.
		closeProject = function(e) {
			e && e.preventDefault();
			$('#portfolio-overlay').remove();
			$b.removeClass('has-overlay');
		},

		// Show selected image.
		showImage = function(project, idx) {
			var $imageContainer = $('#portfolio-overlay > div:first-child');
			project.image = idx || 1;
			$imageContainer.html('').append(tImage.render(project));
		},

		// Close current image and render prev/next image.
		switchImage = function(e, prev) {
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
		},

		handleKey = function(e) {
			// esc - close project
			e.which == 27 && closeProject();
			// space, right or down - next image
			~[32, 39, 40].indexOf(e.which) && switchImage();
			// up or left - prev image
			~[37, 38].indexOf(e.which) && switchImage(null, true);
		};

	// Render thumbnails in grid container.
	projects.forEach(function(project, idx) {
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