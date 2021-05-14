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
			<video autoplay loop muted src="https://ninagofur.com/wp-content/uploads/2020/03/Their-Kingdom_1.mov" playsinline></video>
		</div>

			<?php
			while ( have_posts() ) :
				the_post();
				the_content();
			endwhile; // End of the loop.
			?>

	</div>

<?php get_footer(); ?>
