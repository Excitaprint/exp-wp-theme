<?php

/**
 * Excitaprint Theme Global Theme Functions
 */

// SECURITY: ensure this file cannot be directly accessed from a browser
if (!defined('ABSPATH')) {
    exit;
}

/* Theme Setup Function */
function theme_setup() {
    // Add WordPress block styles support
    add_theme_support('wp-block-styles');

    // Enqueue custom scripts and styles
    add_action('wp_enqueue_scripts', 'enqueue_custom_styles_and_scripts');
}



/**
 * Enqueue Custom Styles and Scripts
 */
function enqueue_custom_styles_and_scripts() {
    // Register custom CSS file
    wp_register_style('custom-style', get_stylesheet_uri(), array(), null, 'all');
    wp_enqueue_style('custom-style');

    // Register custom JavaScript file
    // wp_register_script('custom-script', get_template_directory_uri() . '/js/custom-script.js', array('jquery'), null, true);
    // wp_enqueue_script('custom-script');
}

/**
 * Include Other PHP Files
 */
function include_theme_files() {
    // Include custom helper functions
    $helpers_path = get_stylesheet_directory() . '/inc/helpers.php';
    if (file_exists($helpers_path)) {
        include $helpers_path;
    }

    // Include custom template parts
    $template_parts_path = get_stylesheet_directory() . '/template-parts/custom-template.php';
    if (file_exists($template_parts_path)) {
        include $template_parts_path;
    }
}

add_action('after_setup_theme', 'include_theme_files');

/**
 * Avoid Closing ?> Tags at the End of Files
 */
// The closing PHP tag is intentionally omitted to avoid whitespace issues.
