import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import "./style.css";
// import save from "./save"; // Import the save logic from your save.js file

registerBlockType("theme/services-hero", {
  edit: ({ setAttributes }) => {
    const blockProps = useBlockProps({ className: "wp-block-services-hero" });

    return (
      <div {...blockProps}>
        <div class="services-hero__hero-img-wrapper">
          <img class="services-hero__hero-img-wrapper" src="/wp-content/themes/crmorton-wp-theme/assets/images/img-placeholder.png" />
        </div>
        <div class="services-hero__hero-wrapper">
          <div class="services-hero__hero-h1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </div>
          <div class="services-hero__hero-h2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </div>
          <div class="services-hero__button-wrapper">
          </div>
        </div>
      </div>
    );
  },
  save: () => null, // Calls the save funciton
});


