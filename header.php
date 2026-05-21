<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<!-- Meta tags can be handled by wordpress as well as descriptions
Set this in functions.php -->
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Discover Charles R Morton Electric, LLC, your trusted electricians in Georgia. Experience efficient, quality service from seasoned experts. Contact us today!">
    <meta name="google-site-verification" content="QJJ6UdRcBei6EMSVIfpAlqXq2_i8ZSrw4hy-WDYGCcI">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Top Electrician Services in Georgia | Charles R Morton Electric, LLC">
    <meta name="twitter:description" content="Discover Charles R Morton Electric, LLC, your trusted electricians in Georgia. Experience efficient, quality service from seasoned experts. Contact us today!">
    <meta name="twitter:image" content="https://crmortonelectric.com/api/og-image?title=Top+Electrician+Services+in+Georgia+%7C+Charles+R+Morton+Electric%2C+LLC&amp;company=Charles+R+Morton+Electric%2C+LLC&amp;color=%23000000&amp;description=Discover+Charles+R+Morton+Electric%2C+LLC%2C+your+trusted+electricians+in+Georgia.+Experience+efficient%2C+quality+service+from+seasoned+experts.+Contact+us+today%21&amp;logo=https%3A%2F%2Fik.imagekit.io%2F4wu305uo4%2Fimage_6865883a5c7cd75eb842859e.webp">
    <link rel="icon" href="https://ik.imagekit.io/4wu305uo4/image_6865888d5c7cd75eb8445447.png">
    <title>Top Electrician Services in Georgia | Charles R Morton Electric, LLC</title>
    <link rel="canonical" href="https://crmortonelectric.com">
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
                        <div class="main-nav-list">Panels & Power<span class="material-symbols-outlined nav-key-down">keyboard_arrow_down</span></div>
                        <div class="main-nav-list">Lighting Services<span class="material-symbols-outlined nav-key-down">keyboard_arrow_down</span></div>
                        <div class="main-nav-list">Wiring & Repairs<span class="material-symbols-outlined nav-key-down">keyboard_arrow_down</span></div>
                        <div class="main-nav-list">EV, Solar & Smart<span class="material-symbols-outlined nav-key-down">keyboard_arrow_down</span></div>
                        <div class="main-nav-list">Projects<span class="material-symbols-outlined nav-key-down">keyboard_arrow_down</span></div>
                        <div class="main-nav-list">Reviews<span class="material-symbols-outlined nav-key-down">keyboard_arrow_down</span></div>
                        <div class="main-nav-list">Contact</div>
                    </nav>
                    <div class="menu-cta-wrapper">
                        <div class="menu-cta-top">
                            <h3 class="menu-cta-call">Call or Text</h3>
                            <a href="tel:6783580302" class="menu-cta-num">
                                <span class="material-symbols-outlined menu-cta-num-icon">call</span>
                                <span class="menu-cta-num-text">678 358-0302</span>
                            </a>
                        </div>

                        <a class="menu-cta-button" href="https://portal.fieldpulse.com/charlesrmortonelectricllc/contact">
                            <span class="material-symbols-outlined arrow-icon">arrow_forward</span>
                            Book Now
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
    </header>