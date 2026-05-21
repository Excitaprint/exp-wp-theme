import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import "./style.css";
// import save from "./save"; // Import the save logic from your save.js file


registerBlockType("theme/services-copy", {
  edit: ({ setAttributes }) => {
    const blockProps = useBlockProps({ className: "wp-block-services-copy" });

    return (
      <div {...blockProps}>
      </div>
    );
  },
  save: () => null, // Calls the save funciton
});
