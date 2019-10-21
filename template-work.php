
<?php

/* Template Name: Single Work Template */

get_header();
?>

	<div class="full-image-overlay-container">

		<div class="image-description">
			<h2><?php the_title(); ?></h2>
			<p>more info</p>
			<p>more info</p>
			<p>more info</p>
			<p>more info</p>
		</div>

		<div class="full-image-container">
			<?php// echo do_shortcode('[supsystic-slider id=2 position="center"]'); ?>
			<?php the_post(); the_content(); ?>
		</div>

	</div>
	

<?php
// get_sidebar();
get_footer();