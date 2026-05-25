import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps } from "@wordpress/block-editor";
import "./style.css";
// import save from "./save"; // Import the save logic from your save.js file
import { GoogleIcon, AngiIcon } from "./google-angi-icons";
import { ThumbtackIcon, BBBIcon, AmazonIcon } from "./tack-bbb-amazon-icons";
// import { gwccLogo, gaLotto, hawksLogo, spelmanLogo, pgaLogo } from "./assets/images/";

registerBlockType("theme/badges", {
  edit: ({ setAttributes }) => {
    const blockProps = useBlockProps({ className: "wp-block-badges" });

    return (
      <div {...blockProps}>
        <div className="wp-block-badges-grid">
          <h3 className="badges-header-wrapper">
            Excitaprint is a leading Atlanta, GA supplier of commercial printing, software development, promotional items, direct marketing & direct mail solutions that help grow revenue.
          </h3>
          <div className="badges-wrapper">
            <div className="google-wrapper">
              {/* <GoogleIcon /> */}
              <img
                src={gwccLogo}
                alt="Georgia World Congress Center"
                className="gwcc-logo"
              />
            </div>
            <div className="ga-lottery">
              {/* <AngiIcon /> */}
              <img
                src={gaLotto}
                alt="Georgia Lottery"
                className="ga-lottery"
              />
            </div>
            <div className="spelman-logo">
              {/* <AmazonIcon /> */}
                <img
                src={spelmanLogo}
                alt="Spelman College Logo"
                className="spelman-logo"
              />
            </div>
            <div className="pga-tour">
              {/* <ThumbtackIcon /> */}
              <img
                src={pgaLogo}
                alt="PGA Tour"
                className="pga-tour"
              />
            </div>
            <div className="hawks-logo">
              {/* <BBBIcon /> */}
              <img
                src={hawksLogo}
                alt="Hawks Logo"
                className="hawks-logo"
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
  save: () => null, // Calls the save funciton
});
