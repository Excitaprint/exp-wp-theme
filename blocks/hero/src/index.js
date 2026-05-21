import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import "./style.css";
// import save from "./save"; // Import the save logic from your save.js file
import { GoogleGIcon } from "./icons";

registerBlockType("theme/hero", {
  edit: ({ setAttributes }) => {
    // useBlockProps handles the standard block classes
    const blockProps = useBlockProps({ className: "wp-block-hero" });

    return (
      <div {...blockProps}>
        <img class="hero-img" src="/wp-content/themes/exp-wp-theme/assets/images/image-placeholder.png" />
        <div className="hero-card">
          <RichText
            tagName="h1"
            value="Your Trusted Georgia Electricians."
            onChange={(title) => setAttributes({ title })}
            placeholder="Enter headline here."
          />
          <p>Reliable, on-time service equipped for your needs.</p>
          <div className="hero-buttons-wrapper">
            <a href="tel:6783580302" className="wp-block-hero__button">
              <div className="icon-wrapper">
                <span className="material-symbols-outlined phone-icon">
                  call
                </span>
              </div>
              Call Us
            </a>
            <a
              href="https://portal.fieldpulse.com/charlesrmortonelectricllc/contact"
              className="wp-block-hero__button"
            >
              <div className="icon-wrapper">
                <span className="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </div>
              Request Quote
            </a>
          </div>
        </div>
        <a href="https://search.google.com/local/reviews?placeid=ChIJv88mrLms9YgRadoepk1fU1M" className="google-rating-wrapper">
          <GoogleGIcon className="google-logo" />
          <div className="star-row">
            <span className="material-symbols-outlined star-icon">
              kid_star
            </span>
            <span className="material-symbols-outlined star-icon">
              kid_star
            </span>
            <span className="material-symbols-outlined star-icon">
              kid_star
            </span>
            <span className="material-symbols-outlined star-icon">
              kid_star
            </span>
            <span className="material-symbols-outlined star-icon">
              kid_star
            </span>
          </div>
          <p>4.9</p>
        </a>
      </div>
    );
  },
  save: () => null, // Calls the save funciton
});
