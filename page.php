
<?php

get_header();
?>

	<div class="page-container">
		<div class="content-area">
			<div class="page-title">
				<?php the_title('<h1>', '</h1>'); ?>
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
	</div>
	
<?php
// get_sidebar();
get_footer();