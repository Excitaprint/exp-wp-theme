import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import "./style.css";
// import save from "./save"; // Import the save logic from your save.js file


registerBlockType("theme/services-reel", {
  edit: ({ setAttributes }) => {
    const blockProps = useBlockProps({ className: "wp-block-services-reel" });

    return (
      <div {...blockProps}>
        <div className="services-reel-header">
          <h1>Lorem Ipsum
          </h1>
        </div>
        <div className="services_reel-reel-wrapper">
          <div className="services_reel-reel-card"></div>
        </div>
      </div>
    );
  },
  save: () => null, // Calls the save funciton
});
