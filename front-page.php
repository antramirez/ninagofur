<?php
/**
 *
 * @package ninagofur
 * @subpackage ninagofur
 * @since ninagofur 1.0
 */

get_header(); ?>

	<div id="primary" class="homepage">
		<!-- <iframe title="vimeo-player" src="https://player.vimeo.com/video/373261209" width="640" height="360" frameborder="0" allowfullscreen></iframe> -->
		<!-- <main id="main" class="homepage-main" role="main">
			<p id="see-work-button"> click to enter site</p>
		</main> -->

		<div class="home-center-text">
			<h1>NINA GOFUR</h1>
			<a href="./work">enter site</a>
		</div>


		<div class="wp-block-video">
			<video loop muted src="http://localhost:8888/ninagofur/wp-content/uploads/2019/12/Their-Kingdom-Far-Away.mp4" playsinline></video>
		</div>

		<!-- <div id="works">
			<div class="works-container"> -->
					<?php
					while ( have_posts() ) :
						the_post();
						the_content();
						// get_template_part( 'template-parts/content', 'page' );
					endwhile; // End of the loop.
					?>
			<!-- </div>
		</div> -->
	</div>

<?php get_footer(); ?>
