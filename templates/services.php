<?php
/**
 * Template Name: Services Template
 */

get_header(); ?>

<div class="content-wrapper">
    <?php
    while ( have_posts() ) : the_post();
        the_content();
    endwhile;
    ?>
</div>

<?php get_footer(); ?>