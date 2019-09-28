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
			<!-- <a id="see-work-button" href="#works">See work</a> -->
			<p id="see-work-button"> See works</p>
		</main>
		
		<div id="works">
			<div class="page-title">
				<!-- <h1 class="black-text">Works</h1>
				<h1 class="gray-text">Works</h1>
				<h1 class="light-gray-text">Works</h1> -->
				<h1 class="lightest-gray-text">Works</h1>
			</div>

			

			<div class="works-container">
				<main id="main" class="site-main">

					<?php
					while ( have_posts() ) :
						the_post();
						the_content();
						// get_template_part( 'template-parts/content', 'page' );
					endwhile; // End of the loop.
					?>

				</main><!-- #main -->
				<!-- <div class="works-img-container">
					<h2>Cinematography</h2>
				</div>

				<div class="works-img-container">
					<h2>Directorial Work Stills</h2>
				</div> -->
			</div>
			
		
		</div>


		<div id="cinematography">

		</div>

		<div id="directorial-work-stills">

		</div>

	</div>

	

<?php //get_sidebar(); ?>
<?php get_footer(); ?>
