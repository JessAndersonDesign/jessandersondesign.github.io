(function(w, d) {
	var $w = $(w),
		$b = $(d.body),

		// project data
		projects = [
			{
				dir: 'libby-social',
				title: 'Love Libby XO - Social',
				type: 'Social Media Posts, Photo Editing, Branding',
				description: `
					<p>
					These are some of the many posts I created for the Love Libby XO brand.
					Posts were used on the Facebook and Instagram pages as well as shown in
					a feed on the Love Libby XO website. The posts served as the main way to
					share and promote products with our brands customers and to aid in marketing
					our products through online advertisements, gaining new fans and followers.
					</p>`,
				images: 11
			},
			{
				dir: 'teri-catalogs',
				title: 'Teri Lingerie – Catalogs',
				type: 'Publication Design, Marketing Collateral, Branding',
				description: '<p>I designed, built, and maintained three separate catalogs at Teri Lingerie. There was a stock catalog for Love Libby XO merchandise, a multi-pack catalog of Love Libby XO merchandise, and a catalog of Teri Lingerie brand women’s intimate apparel. All three catalogs were created with InDesign and Photoshop. Each catalog was also made available in an online version via the Flipsnack flipbook website.</p>',
				images: 6
			},
			{
				dir:'libby-web',
				title: 'Love Libby XO - Web',
				type: 'Web Design, Branding, Marketing',
				description: '<p>I designed and built the Love Libby XO website using the Shopify website and online store builder. The simple, clean design makes navigating our content and learning about our brand quick and easy.</p><p>Once we had our own sales channel up and running I was able to use Amazon Stores to translate the look and feel of the Love Libby XO website into our very own Amazon shop. The front end tools provided by Amazon made it fun and quick to design our Brand Story and customize an online storefront for Amazon shoppers to explore Love Libby XO products.</p>',
				images: 2
			},
			{
				dir: 'shedrain-flyers',
				title: 'ShedRain – Flyers',
				type: 'Marketing Collateral, Branding, Advertisements',
				description: '<p>While at ShedRain, I had the pleasure of creating many sales flyers, inserts, and coupons for our various umbrellas. I designed with the intention of highlighting special features, or showcasing how umbrellas meet the promotional needs of a given industry or organization. These flyers are examples of how clean graphics, nice product photography, and well applied typography can aid in sales and promotion.</p>',
				images: 9
			},
			{
				dir: 'shedrain-virtuals',
				title: 'ShedRain - Custom Virtuals',
				type: 'Branding, Marketing, Product Design',
				description: '<p>Umbrellas have so many different customizable parts, they’re a great promotional item! As the Art Desk designer I was able to create virtual mockups to show our customers how their custom umbrellas could look. From a simple logo on one panel to custom color fabric and trim, there are no limits. Full color photographs, special ink that only appears when wet, and custom molded or engraved handles are just some of the options available.</p>',
				images: 8
			},
			{
				dir: 'shedrain-logos',
				title: 'ShedRain – Logos',
				type: 'Illustration, Vectorization',
				description: `			
					<p>
					As the Art Desk designer for promotional products I saw my fair share of logos!
					Anytime clients did not have vector logos available ShedRain was there to make printing
					promotional products easy. I received many jpg files, some large and clear, some small
					and blurry. I always did my best to accurately recreate each customers logo needs into a
					finalized print ready vector format. Using Illustrator I would redraw each logo and then
					search for matching fonts to complete the designs.
					</p>`,
				images: 8
			},
			{
				dir: 'pizza',
				title: 'Pint Slice',
				type: 'Branding, Packaging, Illustration',
				description: '<p>Pint Slice &mdash; great pizza and beer.'
					+ '</p><p>'
					+ 'Designing a stand out logo is always fun, even more so when it involves pizza and beer! I\'ve used red '
					+ 'and black as a way to strip out excess and showcase the restaurants simplicity. The logo is a fun '
					+ 'combination of pizza and a bottle cap, since Pint Slice is known for their variety of beer on tap '
					+ 'and in bottles. The simple graphics help make Pint Slice a fun and modern pizza experience in a '
					+ 'relaxed environment.'
					+ '</p>',
				images: 4
			},
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
				dir: 'magazine',
				title: 'Eco Life Magazine',
				type: 'Branding, Publication Design',
				description: `
					<p>Eco Life is a magazine created for those who want the Earth to thrive!</p>
					<p>
						This magazine features articles on a variety of subjects ranging from finance to health and 
						beauty. The cover was created using a photograph of a stunning natural beauty combined with brightly 
						colored typography to highlight the floral elements in the image.
					</p>`,
				images: 3
			},
			{
				dir: 'crab-lobster',
				title: 'Crab & Lobster',
				type: 'Logo, Branding, Web Design',
				images: 5,
				description: '<p>I designed a logo, website, and various business materials for the Crab & Lobster, a pub in Port Wenn.</p><p>The logo features hand lettering and a playful illustrated crab. This logo matches the casual and simple atmosphere of the pub and is shown in a blue that compliments the pubs waterfront views.</p><p>The printed collateral has a light and open feel that evokes the traditional style of this well established seaside pub.</p><p>A one page website keeps things casual and offers a quick overview of all the basic information customers are looking for.</p>'
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
				images: 5
			},
			{
				dir: 'saul',
				title: 'Better Call Saul',
				type: 'Illustration, Publication Design',
				description: '<p>An example of publication design, this magazine spread features an article about the television show Better Call Saul. A clean layout and custom illustrations enhance the written article while color and typography compliment the feel of the show.</p>',
				images: 3,
				imageType: 'gif'
			},
			{
				dir: 'infographics',
				title: 'Infographics',
				type: 'Infographic Design, Illustration',
				images: 2,
				description: '<p>These infographics were designed to share a small number of facts about our shower and tv viewing habits. I read several interesting articles about water usage, grooming habits, and what we watch on television.</p><p>Through infographics I was able to condense entire articles into a few interesting facts and share them in an entertaining, easy to read format.</p><p>My hope is that the illustrations engage the viewer and make the facts more memorable.</p>'
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
				images: 3
			},
			{
				dir: 'illustrations',
				title: 'Various Illustrations',
				type: 'Illustrations',
				images: 8,
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
			project.imageType = project.imageType || 'jpg';
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