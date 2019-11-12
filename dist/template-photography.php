<?php

/* Template Name: Photography Page Template */

get_header();
?>

	<div class="photography-container">
        <?php the_post(); the_content(); ?>
	</div>

<?php
get_footer();
?>