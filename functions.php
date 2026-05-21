<?php

/**
 * CRMElectric-EXP Global Theme Functions
 */

// ** HOT-RELOAD DEV SERVER SETTINGS. CHANGE FOR DEPLOYMENT? THINK SO!
$version = (defined('WP_DEBUG') && WP_DEBUG) ? time() : '1.0';

// 1. Register custom blocks & create page templates
add_action('init', function () {

    // Register Navigation Menus
    register_nav_menus(array(
        'primary-menu' => esc_html__('Primary Menu', 'crmorton-wp-theme'),
    ));

    // Register Blocks in init
    // Register Editor Templates/Pages in a block_editor_settings_all filter hook

    // Register HOME Blocks
    register_block_type(__DIR__ . '/blocks/hero/');
    // register_block_type(__DIR__ . '/blocks/services/');
    // register_block_type(__DIR__ . '/blocks/coupon/');
    // register_block_type(__DIR__ . '/blocks/reviews');
    // register_block_type(__DIR__ . '/blocks/recognition');
    // register_block_type(__DIR__ . '/blocks/map/');
    register_block_type(__DIR__ . '/blocks/about/');
    register_block_type(__DIR__ . '/blocks/badges/');

    // Register SERVICE Blocks
    // register_block_type(__DIR__ . '/blocks/services-hero/');
    // register_block_type(__DIR__ . '/blocks/services-map/');
    // register_block_type(__DIR__ . '/blocks/services-reel/');
    // register_block_type(__DIR__ . '/blocks/services-reviews/');
    // register_block_type(__DIR__ . '/blocks/services-copy/');

    // Old logic to define the default layout for Home 
    // Made all page Editor Templates, the array below -- incorrect
    // Also, shouldn't be in init. It's in it's own filter hook

    //     $post_type_object = get_post_type_object('page');
    //     if ($post_type_object) {
    //         $post_type_object->template = array(
    //             array('theme/hero'),
    //             array('theme/services'),
    //             array('theme/coupon'),
    //             array('theme/reviews'),
    //             array('theme/recognition'),
    //             array('theme/map'),
    //             array('theme/about'),
    //             array('theme/badges'),
    //         );
    //     }
});

// 2. Register custom "Index" template, 'index-template.php'
// add_filter('theme_page_templates', function ($post_templates) {
//     // 'filename' => 'Display Name in Admin'
//     $post_templates['index-template.php'] = 'Home Template';
//     return $post_templates;
// });

// 3. Register Editor Templates/Pages here
add_filter('block_editor_settings_all', function ($settings, $context) {
    if (! empty($context->post)) {
        $template = get_page_template_slug($context->post->ID);

        // Home Template
        if ('index-template.php' === $template) {
            $settings['template'] = [
                ['theme/hero'],
                // ['theme/services'],
                // ['theme/coupon'],
                // ['theme/reviews'],
                // ['theme/recognition'],
                // ['theme/map'],
                ['theme/about'],
                ['theme/badges'],
            ];
            // Allows edits within blocks, but not template (block order)
            // 'insert' would allow adding paragraph blocks, etc.
            $settings['templateLock'] = 'insert';
        }

        // Services Template
        // if ('services.php' === $template) {
        //     $settings['template'] = [
        //         ['theme/services-hero'],
        //         ['theme/services-map'],
        //         ['theme/services-reel'],
        //         ['theme/services-reviews'],
        //         ['theme/services-copy'],
        //     ];
        //     $settings['templateLock'] = 'insert';
        // }
    }
    return $settings; // The "Assembly Line" return
}, 10, 2); // 10 is default settings, 2 is arguments passed

// 4. Enqueue frontend styles & fonts
add_action('wp_enqueue_scripts', function () use ($version) {
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap', array(), null);
    wp_enqueue_style('material-symbols', 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200', array(), null);

    wp_enqueue_style('theme-vars', get_template_directory_uri() . '/global-vars.css', array(), $version);
    wp_enqueue_style('theme-main', get_stylesheet_uri(), array('theme-vars'), $version);

    wp_enqueue_script('theme-logo', get_template_directory_uri() . '/js/theme-logo.js', array(), $version, true);
    // wp_enqueue_script( 'services-block', get_template_directory_uri() . '/js/services-block.js', array(), $version, true );

});

// Load shared block assets on frontend + editor content iframe
add_action('enqueue_block_assets', function () {
    wp_enqueue_style(
        'material-symbols',
        'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
        array(),
        null
    );
});

// 5. Enqueue assets for the Block Editor (Gutenberg)
add_action('enqueue_block_editor_assets', function () {
    // This makes the icons show up in the backend editor!
    wp_enqueue_style('google-fonts-editor', 'https://fonts.googleapis.com/css2?family=Poppins:wght@300..900&display=swap', array(), null);
    wp_enqueue_style('material-symbols-editor', 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200', array(), null);
});

// 6. Theme Support (?)
add_action('after_setup_theme', function () {
    add_theme_support('editor-styles');
    // Use full URIs for editor styles to ensure they resolve correctly
    add_editor_style(array(get_template_directory_uri() . '/global-vars.css', get_template_directory_uri() . '/style.css'));
    add_theme_support('align-wide');
    add_theme_support('menus');
});

// 7. Theme Activation / Theme Bootstrap / Provisioning
// Create Page Templates & Page Slugs in DB & Editor > Reading
// Template set to insert, as to add new blocks
// Setting TemplateLock to all won't allow new blocks to be inserted (?)
// If new blocks added in $var_content, delete page
// & then switch themes & back again
add_action('after_switch_theme', function () {
    // ---- HOME PAGE ----
    $home_slug = 'home';
    // What is impode \n? -
    $home_page = get_page_by_path($home_slug, OBJECT, 'page');
    // 
    if (! $home_page) {
        $home_content = implode("\n", [
            '<!-- wp:theme/hero /-->',
            // '<!-- wp:theme/services /-->',
            // '<!-- wp:theme/coupon /-->',
            // '<!-- wp:theme/reviews /-->',
            // '<!-- wp:theme/recognition /-->',
            // '<!-- wp:theme/map /-->',
            '<!-- wp:theme/about /-->',
            '<!-- wp:theme/badges /-->'
        ]);

        $home_id = wp_insert_post([
            'post_type'     => 'page',
            'post_status'   => 'publish',
            'post_title'    => 'Home',
            'post_name'     => $home_slug,
            'post_content'  => $home_content,
            'page_template' => 'index-template.php',
        ], true);

        if (is_wp_error($home_id)) {
            return;
        }

        $home_page_id = (int) $home_id;
    } else {
        $home_page_id = (int) $home_page->ID;
    }

    // Set Reading to Home
    update_option('show_on_front', 'page');
    update_option('page_on_front', $home_page_id);

    // ---- SERVICES PAGE ----
    // Each page is an if statement! ?
    // $services_slug = 'services';
    // $services_page = get_page_by_path($services_slug, OBJECT, 'page');
    // if (! $services_page) {
    //     $services_content = implode("\n", [
    //         '<!-- wp:theme/services-hero /-->',
    //         '<!-- wp:theme/services-map /-->',
    //         '<!-- wp:theme/services-reel /-->',
    //         '<!-- wp:theme/services-reviews /-->',
    //         '<!-- wp:theme/services-copy /-->',
    //     ]);

    //     $services_id = wp_insert_post([
    //         'post_type'     => 'page',
    //         'post_status'   => 'publish',
    //         'post_title'    => 'Services',
    //         'post_name'     => $services_slug,
    //         'post_content'  => $services_content,
    //         'page_template' => 'services.php',
    //     ], true);

    // if (is_wp_error($services_id)) {
    //             return;
    //         }
        //     $services_page_id = (int) $services_id;
        // } else {
        //     $services_page_id = (int) $services_page->ID;
    // }
});
