import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import "./style.css";
// import save from "./save"; // Import the save logic from your save.js file

registerBlockType("theme/coupon", {
  edit: ({ setAttributes }) => {
    const blockProps = useBlockProps({ className: "wp-block-coupon" });

    return (
      <div {...blockProps}>
        {/* <div className="squiggles"></div> */}
        <div className="coupon-block-header">Current Offers</div>
        <div className="coupon-wrapper">
          <div className="coupon-4"></div>
          <div className="coupon-3"></div>
          <div className="coupon-2"></div>
          <div className="coupon-1">
            <div className="coupon-text-wrapper">
              <div className="coupon-header">
                <h3>10% Off</h3>
                <div className="get-code__button">GET CODE</div>
              </div>
              <div className="coupon-subheader">
                Proudly Serving Those Who Served - 10% Off Electrical Services
              </div>
              <div className="coupon-p">
                Save 10% on all electrical services for active military
                personnel and veterans. Honoring your service with quality
                electrical solutions at an unbeatable price, ensuring safety and
                reliability in every installation and repair. Our licensed team
                is ready to serve you with excellence.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  save: () => null, // Disables calling save function, using render.php instead
});
