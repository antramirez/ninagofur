
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

	<div class="full-image-overlay-container">
		<div class="gallery-thumbnails-container">
			<!-- list goes here -->

		</div>
		<div class="overlay-inner-container">
			<!-- <h2>TITLE</h2> -->

			<div class="close-img-container-button">
				CLOSE
			</div>

			<!-- img goes here -->
			<div class="image-container">
				<img src="" alt="">
			</div>

			<div class="image-lower">
				<div class="image-description">
					<h2>TITLE</h2>
					<p>more info</p>
					<p>more info</p>
					<p>more info</p>
					<p>more info</p>
				</div>

				<div class="image-controls">
					<div class="left-arrow"></div>
					<h3>01 - 06</h3>
					<div class="right-arrow"></div>
				</div>
			</div>
			
		</div>
	</div>
	

<?php
// get_sidebar();
get_footer();