<?php


function ninagofur_setup() {


    $manifest = json_decode(file_get_contents('dist/assets.json', true));
    $main = $manifest->main;

    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css?family=Josefin+Sans:100,300,400|Lato:100,300,400&display=swap');
    wp_enqueue_style( 'theme-name-style', get_template_directory_uri() . $main->css, false, null );

    wp_enqueue_script("jquery");



    wp_enqueue_script('theme-name-js', get_template_directory_uri() . $main->js, ['jquery'], null, true);

    // if (is_front_page()) {
    //   wp_enqueue_script( 'p5', 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js', array(), null, true );
    //   wp_enqueue_script( 'p5-dom', 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js', array(), null, true );
    //   wp_enqueue_script( 'home-animation', get_template_directory_uri() . '/js/sketch.js', ['jquery'], null, true );
    // }


    // register_nav_menu('header-menu', ( 'Nav Menu' ));

}

add_action('wp_enqueue_scripts', 'ninagofur_setup');


function ninagofur_init() {
  add_theme_support('post-thumbnails');
  add_theme_support('title-tag');
  // add_theme_support('html5', 'comment-list', 'comment-form', 'search-form');

  add_theme_support( 'html5', array(
    'search-form',
    'comment-form',
    'comment-list',
    'gallery',
    'caption'
  ) );

}

add_action('after_setup_theme', 'ninagofur_init');


function register_my_menu() {
  register_nav_menu('header-menu',__( 'Nav Menu' ));
}
add_action( 'init', 'register_my_menu' );


// function cinematography_init() {
//   $labels = array(
//     'name' => 'Cinematographies',
//     'singular_name' => 'Cinematography',
//     'add_new' => 'Add New',
//     'add_new_item' => 'Add New Cinematography',
//     'edit_item' => 'Edit Cinematography',
//     'new_item' => 'New Cinematography',
//     'view_item' => 'View Cinematography',
//     'search_items' => 'Search Cinematography',
//     'not_found' =>  'No cinematographies found',
//     'not_found_in_trash' => 'No cinematographies found in Trash'
//   );
//   $args = array(
//     'labels' => $labels,
//     'description' => "A custom post type for cinematography projects",
//     'public' => true,
//     'rewrite' => array('slug' => 'cinematography'),
//     'supports' => array('title', 'editor', 'custom-fields'),
//     'show_in_rest' => true
//   );
//   register_post_type('cinematography', $args);
//   flush_rewrite_rules();
// }
// add_action('init', 'cinematography_init');
//
//
// function directing_init() {
//   $labels = array(
//     'name' => 'Directing',
//     'singular_name' => 'Directing',
//     'add_new' => 'Add New',
//     'add_new_item' => 'Add New Directing',
//     'edit_item' => 'Edit Directing',
//     'new_item' => 'New Directing',
//     'view_item' => 'View Directing',
//     'search_items' => 'Search Directing',
//     'not_found' =>  'No directing project found',
//     'not_found_in_trash' => 'No directing projects found in Trash'
//   );
//   $args = array(
//     'labels' => $labels,
//     'description' => "A custom post type for directing projects",
//     'public' => true,
//     'rewrite' => array('slug' => 'directing'),
//     'supports' => array('title', 'editor', 'custom-fields'),
//     'show_in_rest' => true
//   );
//   register_post_type('directing', $args);
//   flush_rewrite_rules();
// }
// add_action('init', 'directing_init');

// function cinematography_updated_messages( $messages ) {
//   $messages['cinematography'] = array(
//     '', /* Unused. Messages start at index 1. */
//     sprintf('Cinematography updated. <a href="%s">View cinematography</a>',
//     esc_url(get_permalink($post_ID))),
//     'Custom field updated.',
//     'Custom field deleted.',
//     'Cinematography updated.',
//     (isset($_GET['revision']) ?
//     sprintf('Cinematography restored to revision from %s',
//     wp_post_revision_title((int)$_GET['revision'], false)) : false),
//     print('Cinematography published. <a href="%s">View book</a>',
//     esc_url(get_permalink($post_ID))),
//     'Cinematography saved.',
//     sprintf('Cinematography submitted. <a target="_blank" href="%s">
//     Preview cinematography</a>',
//     esc_url(add_query_arg('preview', 'true',
//     get_permalink($post_ID)))),
//     sprintf('Cinematography scheduled for: <strong>%1$s</strong>.
//     <a target="_blank"
//     href="%2$s">Preview cinematography</a>',
//     date_i18n('M j, Y @ G:i', strtotime($post-
//     >post_date)), esc_url(get_permalink($post_ID))),
//     sprintf('Cinematography draft updated. <a target="_blank" href="%s">
//     Preview cinematography</a>',
//     esc_url(add_query_arg('preview', 'true', get_permalink($post_ID))))
//   );
//   return $messages;
// }
// add_filter('post_updated_messages', 'cinematography_updated_messages');







// function ninagofur_scripts() {
//   $manifest = json_decode(file_get_contents('dist/assets.json', true));
//   $main = $manifest->main;

//   wp_enqueue_style( 'theme-name-style', get_template_directory_uri() . $main->css, false, null );
//   wp_enqueue_script('theme-name-js', get_template_directory_uri() . $main->js, ['jquery'], null, true);
  // wp_enqueue_script('main', get_template_directory_uri() . '/ist', null, null, true);
  // wp_enqueue_script('main', get_theme_file_uri('/js/script.js'), NULL, microtime(), true);



// }

// add_action( 'wp_enqueue_scripts', 'ninagofur_scripts' );
?>
