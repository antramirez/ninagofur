<?php

/* Template Name: Photography Page Template */

get_header();
?>

	<div class="photography-container">
			<!-- <div class="page-title">
				<h1><?php the_title(); ?></h1>
			</div> -->
        <?php the_post(); the_content(); ?>
	</div>

<?php
get_footer();
?>
