<?php
/**
 *
 * @package ninagofur
 * @subpackage ninagofur
 * @since ninagofur 1.0
 */

get_header(); ?>

	<div id="primary" class="homepage">
		<main id="main" class="homepage-main" role="main">
			<p id="see-work-button"> click & hold to enter site</p>
		</main>
		
		<div id="works">
			<div class="works-container">
				<div class="page-title">
					<h1 class="lightest-gray-text">Works</h1>
				</div>
					<?php
					while ( have_posts() ) :
						the_post();
						the_content();
						// get_template_part( 'template-parts/content', 'page' );
					endwhile; // End of the loop.
					?>
			</div>
		</div>

		<div class="works-single">
			
			<div class="works-single-container">
				<div class="page-title">
					<h1 id="works-title" class="lightest-gray-text"></h1>
				</div>
				<?php
					while ( have_posts() ) :
						the_post();
						the_content();
						// get_template_part( 'template-parts/content', 'page' );
					endwhile; // End of the loop.
				?>
			</div>
		</div>

	</div>

<?php get_footer(); ?>
