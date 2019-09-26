<?php
/**
 *
 * @package ryanslowe
 * @subpackage ryanslowe
 * @since ryanslowe 1.0
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

      <div class="entry-content">
  			<?php echo get_post_field('post_content'); ?>
  		</div>
		</main><!-- .site-main -->
	</div><!-- .content-area -->

<?php //get_sidebar(); ?>
<?php get_footer(); ?>
