<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<!-- Meta tags can be handled by wordpress as well as descriptions
Set this in functions.php -->
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Excitaprint is a leading Atlanta, GA provider of end-to-end marketing solutions including application development, commercial printing, promotional items & direct mail marketing that help businesses grow revenue.">
    <meta name="google-site-verification" content="">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Online & Offline Marketing | Excitaprint">
    <meta name="twitter:description" content="Excitaprint is a leading Atlanta, GA provider of end-to-end marketing solutions focused on software development, digital design, commercial printing, promotional items & direct mail marketing helping businesses grow revenue.">
    <meta name="twitter:image" content="<?php echo get_template_directory_uri(); ?>/assets/images/exp-twt-card.png">
<meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/assets/images/exp-twt-card.png">
<meta name="twitter:site" content="@excitaprint">
<meta property="og:image:width" content="1634">
<meta property="og:image:height" content="920">
    <link rel="icon" href="">
    <title>Online & Offline Marketing</title>
    <link rel="canonical" href="https://excitaprint.com/">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <header id="site-header" class="site-header">
        <!-- ... logo, navigation, CTA ... -->

        <div class="menu-wrapper">
            <div class="menu-grid">
                <div class="logo"></div>
                <div class="header-nav-cta">
                    <!-- navigation -->
                     <!-- list wrapper -->
                    <nav id="site-navigation" class="main-navigation list-wrapper">

                        <?php /* PHP MENU IS COMMENTED OUT. CAUSING RENDER ISSUES, TURN ON WHEN PLUGGING UP WP MENU */
                        /*
                wp_nav_menu( array(
                        'theme_location' => 'primary-menu', // Matches the 'primary-menu' registered in functions.php
                        'menu_id'        => 'primary-menu', // A unique ID for your ul element
                        'menu_class'     => 'main-menu',    // A class for your ul element for styling
                        'container'      => false,           // Set to 'ul' to make the nav tag the direct parent of the ul
                        'fallback_cb'    => false           // Don't show a fallback list if no menu is assigned
                           ) );
                            */
                        ?>

                        <!-- MENU PLACEHOLDERS HERE REMOVE AFTER HOOKING UP MENU IN CUSTOMIZER -->

                        <!-- home icon -->
                        <div class="main-nav-list"><span class="material-symbols-outlined menu-home-icon">home</span></div>
                        <div class="main-nav-list">Home<span class="material-symbols-outlined nav-key-down">keyboard_arrow_down</span></div>
                        <div class="main-nav-list">Blog<span class="material-symbols-outlined nav-key-down">keyboard_arrow_down</span></div>
                        <div class="main-nav-list">Products & Services<span class="material-symbols-outlined nav-key-down">keyboard_arrow_down</span></div>
                        <div class="main-nav-list">Contact</div> <!-- SCROLL JACK TO FORM & email & paragraph or small CTA -->
                    </nav>
                    <div class="menu-cta-wrapper">
                        <div class="menu-cta-top">
                            <h3 class="menu-cta-call">Text or Call</h3>
                            <a href="tel:7703097992" class="menu-cta-num">
                                <span class="material-symbols-outlined menu-cta-num-icon">call</span>
                                <span class="menu-cta-num-text">770 309-7992</span>
                            </a>
                        </div>

                        <a class="menu-cta-button" href="mailto:how@excitaprint.com">
                            <span class="material-symbols-outlined arrow-icon">arrow_forward</span>
                            Request Quote
                        </a>
                    </div>

                </div>
            </div>
        </div>
        <script>
            // Import & inject the themeLogo SVG source code into logo container
            document.addEventListener('DOMContentLoaded', function() {
                const footerLogo = document.querySelector('.footer-logo');
                footerLogo.innerHTML = window.themeLogo;
            });
	</script>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-J54EF8KK5Z"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-J54EF8KK5Z');
</script>
    </header>
