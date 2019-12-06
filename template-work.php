
<?php

/* Template Name: Single Work Template */

get_header();
?>

	<!-- <div class="full-image-overlay-container">

		<div class="image-description">
			<h2><?php //the_title(); ?></h2>

		</div>

		<div class="full-image-container">
			<?php //the_post(); the_content(); ?>
		</div>

	</div> -->

	<div class="full-images-container">
		<?php the_post(); the_content(); ?>

	</div>


<?php
// get_sidebar();
get_footer();
?>
