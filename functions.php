<?php

function ninagofur_setup() {
    $manifest = json_decode(file_get_contents('dist/assets.json', true));
    $main = $manifest->main;

    wp_enqueue_style('typekit-serif', 'https://use.typekit.net/fdd0oul.css');
    wp_enqueue_style('typekit', 'https://use.typekit.net/lic3zmy.css');
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css?family=Josefin+Sans:100,300,400|Lato:100,300,400&display=swap');
    wp_enqueue_style('theme-name-style', get_template_directory_uri() . $main->css, false, null );
    wp_enqueue_style('fonts', get_template_directory_uri() . $main->fonts, false, null );

    wp_enqueue_script("jquery");
    wp_enqueue_script('theme-name-js', get_template_directory_uri() . $main->js, ['jquery'], null, true);
}

add_action('wp_enqueue_scripts', 'ninagofur_setup');

add_filter('jpeg_quality', function($arg){return 100;});

function ninagofur_init() {
  add_theme_support('post-thumbnails');
  add_theme_support('title-tag');

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
?>
