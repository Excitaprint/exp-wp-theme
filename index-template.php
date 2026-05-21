<?php
/**
 * Template Name: Home Template
 */

get_header(); ?>

<div class="content-wrapper">
    <?php
    while ( have_posts() ) : the_post();
        the_content(); // This pulls in your Hero block and any other blocks you add
    endwhile;
    ?>
</div>

<?php get_footer(); ?>