
<?php

get_header();
?>

	<div id="primary" class="content-area">
		<div class="page-title">
			<?php the_title('<h1 class="black-text">', '</h1>'); ?>
			<?php the_title('<h1 class="gray-text">', '</h1>'); ?>
			<?php the_title('<h1 class="light-gray-text">', '</h1>'); ?>
			<?php //the_title('<h1 class="lightest-gray-text">', '</h1>'); ?>


		</div>

		<main id="main" class="site-main">

		<?php
		while ( have_posts() ) :
            the_post();
            the_content();
			// get_template_part( 'template-parts/content', 'page' );
		endwhile; // End of the loop.
		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
// get_sidebar();
get_footer();