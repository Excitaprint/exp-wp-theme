import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps } from "@wordpress/block-editor";
import "./style.css";
// import save from "./save"; // Import the save logic from your save.js file
import { GoogleIcon, AngiIcon } from "./google-angi-icons";
import { ThumbtackIcon, BBBIcon, AmazonIcon } from "./tack-bbb-amazon-icons";

registerBlockType("theme/badges", {
  edit: ({ setAttributes }) => {
    const blockProps = useBlockProps({ className: "wp-block-badges" });

    return (
      <div {...blockProps}>
        <div className="wp-block-badges-grid">
          <h3 className="badges-header-wrapper">
            We're a team of professionals who are passionate about what we do.
          </h3>
          < div className="badges-wrapper">
            <div className="google-wrapper">
              <GoogleIcon />
            </div>
            <div className="angi-wrapper">
              <AngiIcon />
            </div>
            <div className="tack-wrapper">
              <ThumbtackIcon />
            </div>
            <div className="bbb-wrapper">
              <BBBIcon />
            </div>
            <div className="amazon-wrapper">
              <AmazonIcon />
            </div>
          </div>
        </div>
      </div>
    );
  },
  save: () => null, // Calls the save funciton
});
