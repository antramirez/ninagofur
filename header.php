<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">


  <title>Nina Gofur</title>

  <?php wp_head(); ?>


</head>
<body <?php body_class(); ?>>


<header class="nav-header">
  <h1><a href="<?php echo home_url(); ?>">NINA GOFUR</a></h1>

  <?php wp_nav_menu( array( 'theme_location' => 'header-menu' ) ); ?>

  <div class="hamburger-menu-container">
    <div class="hamburger-menu-bar bar"></div>
    <div class="hamburger-menu-bar bar"></div>
    <div class="hamburger-menu-bar bar"></div>
  </div>
</header>
