<?php


function ninagofur_setup() {


    $manifest = json_decode(file_get_contents('dist/assets.json', true));
    $main = $manifest->main;

    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
    wp_enqueue_style( 'theme-name-style', get_template_directory_uri() . $main->css, false, null ); 

    wp_enqueue_script("jquery");
    
    wp_enqueue_script( 'p5', 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js', array(), null, true );
    wp_enqueue_script( 'p5-dom', 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js', array(), null, true );

    wp_enqueue_script('theme-name-js', get_template_directory_uri() . $main->js, ['jquery'], null, true);

    wp_enqueue_script( 'home-animation', get_template_directory_uri() . '/js/sketch.js', array(), null, true );


    register_nav_menu('header-menu', ( 'Nav Menu' ));

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