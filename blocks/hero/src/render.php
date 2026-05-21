<?php

/**
 * 
 * WP Dev Docs example - delete comment & 1st set of PHP tags
 * get block wrap att is same as useBlockProps
 * 
 */
?>

<div <?php echo get_block_wrapper_attributes(['class' => 'wp-block-hero']); ?>>
  <img class="hero-img" src="/wp-content/themes/exp-wp-theme/assets/images/ovation-mobile-djs-business-card.png" />
  <div class="hero-card">
    <!-- Old React-only RichText `<RichText.Content tagName="h1" value={attributes.title} />` -->
    <h1>
      <?php echo esc_html($attributes['title'] ??
        'Online & Offline Marketing'); ?>
    </h1>
    <p>
      End-to-end marketing solutions including application development & commercial printing
    </p>
    <div class="hero-buttons-wrapper">
      <a href="tel:6783580302" class="wp-block-hero__button">
        <div class="icon-wrapper">
          <span class="material-symbols-outlined phone-icon">call</span>
        </div>
        Call Us
      </a>
      <a
        href="https://portal.fieldpulse.com/charlesrmortonelectricllc/contact"
        class="wp-block-hero__button">
        <div class="icon-wrapper"> 
          <span class="material-symbols-outlined arrow-icon">
            arrow_forward
          </span>
        </div>
        Request Quote
      </a>
    </div>
  </div>
  <a href="https://search.google.com/local/reviews?placeid=ChIJv88mrLms9YgRadoepk1fU1M" class="google-rating-wrapper">
    <!-- old React save.js `<GoogleGIcon class="google-logo" />` -->
    <img class="google-logo" src="/wp-content/themes/crmorton-wp-theme/assets/images/svgs/google-g-svg.svg">
    <div class="star-row">
      <span class="material-symbols-outlined star-icon">kid_star</span>
      <span class="material-symbols-outlined star-icon">kid_star</span>
      <span class="material-symbols-outlined star-icon">kid_star</span>
      <span class="material-symbols-outlined star-icon">kid_star</span>
      <span class="material-symbols-outlined star-icon">kid_star</span>
    </div>
    <p>4.9</p>
</a>
</div>