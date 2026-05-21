import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import "./style.css";
// import save from "./save"; // Import the save logic from your save.js file

registerBlockType("theme/map", {
  edit: ({ setAttributes }) => {
    const blockProps = useBlockProps({ className: "wp-block-map" });

    return (
      <div {...blockProps}>
        <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1Q-HnPaLbxH7iIzqiiEo0mwY6ahfu4lA&ehbc=2E312F&ll=33.83469392667716%2C-84.31316915&z=10"
          frameborder="0" 
          loading="lazy"
          style="pointer-events:none;" 
          scrolling="no"
          class="map-iframe"
        ></iframe>
        </div>
        <div class="map-card">
          <div class="map-list-header">Serving Metro Atlanta</div>
          <div class="map-list-wrapper">
            <ul>
              <li>
                <span>
                  <span class="map-list-num">01.</span> Buckhead, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">02.</span> Grant Park, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">03.</span> Atlanta, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">04.</span> Smyrna, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">05.</span> College Park, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">06.</span> Panthersville, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">07.</span> Gresham Park, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">08.</span> Redan, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">09.</span> Conyers, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">10.</span> Ellenwood, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">11.</span> Avondale Estates, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">12.</span> Stockbridge, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">13.</span> Jonesboro, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">14.</span> Riverdale, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">15.</span> North Decatur, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">16.</span> Forest Park, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">17.</span> Hapeville, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">18.</span> Druid Hills, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">19.</span> North Druid Hills, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">20.</span> Tucker, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">21.</span> Lilburn, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">22.</span> Brookhaven, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">23.</span> Decatur, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">24.</span> Midtown Atlanta, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">25.</span> Vinings, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">26.</span> Marietta, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">27.</span> Mableton, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">28.</span> South Fulton, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">29.</span> Stone Mountain, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
              <li>
                <span>
                  <span class="map-list-num">30.</span> Stonecrest, GA
                </span>
                <span class="material-symbols-outlined arrow-icon">
                  arrow_forward
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  },
  save: () => null, // Calls the save funciton
});
