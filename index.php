<?php 
/**
 * WordPress 'fallback' template - required
 * Do not delete, keep in main dir of theme
 */
get_header(); ?>

<main id="primary" class="site-main">
    <?php
    if ( have_posts() ) :
        while ( have_posts() ) : the_post();
            // This is the function that renders your Blocks
            the_content(); 
        endwhile;
    endif;
    ?>
</main>

<?php get_footer(); ?>