<?php
/**
 *
 * @package ninagofur
 * @subpackage ninagofur
 * @since ninagofur 1.0
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

      <div class="entry-content">
  			<?php echo get_post_field('post_content'); ?>
  		</div>
		</main><!-- .site-main -->
	</div><!-- .content-area -->

<?php get_footer(); ?>
