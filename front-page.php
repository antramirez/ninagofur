<?php
/**
 *
 * @package ninagofur
 * @subpackage ninagofur
 * @since ninagofur 1.0
 */

get_header(); ?>

	<div id="primary" class="homepage">

		<div class="home-center-text">
			<h1>NINA GOFUR</h1>
			<a href="./directing">enter</a>
		</div>

		<div class="wp-block-video">
			<video loop muted src="http://localhost:8888/ninagofur/wp-content/uploads/2019/12/Their-Kingdom-Far-Away.mp4" playsinline></video>
		</div>

			<?php
			while ( have_posts() ) :
				the_post();
				the_content();
			endwhile; // End of the loop.
			?>

	</div>

<?php get_footer(); ?>
