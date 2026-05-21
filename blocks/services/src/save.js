// // import { useBlockProps, RichText } from "wordpress/block-editor";
// import { useBlockProps } from "@wordpress/block-editor";

// // export default function save({ attributes }) {
// export default function save() {
//   const blockProps = useBlockProps.save({ className: "wp-block-services" });

// return (
//       <div {...blockProps}>
//         <div className="services-mast">
//           <h3>Our Expert Electrical Services</h3>
//           <p>How can we help?</p>
//         </div>
//         <div className="services-menu-wrapper">
//           <button
//             type="button"
//             className="services-menu__button"
//             data-service="group-panels-power"
//           >
//             Panels & Power
//           </button>
//           <button
//             type="button"
//             className="services-menu__button"
//             data-service="group-ev-solar-smart"
//           >
//             EV, Solar & Smart
//           </button>
//           <button
//             type="button"
//             className="services-menu__button"
//             data-service="group-lighting-services"
//           >
//             Lighting Services
//           </button>
//           <button
//             type="button"
//             className="services-menu__button"
//             data-service="group-wiring-repairs"
//           >
//             Wiring & Repairs
//           </button>
//         </div>
//         <div id="services-card-display" className="services-card-wrapper">
//           <div id="group-panels-power" className="services-card-group">
//             <div className="services-card">
//               <div className="services-card__image-wrapper">
//                 <img src="" alt="" />
//               </div>
//               <div className="services-card__h3_wrapper">
//                 <h3></h3>
//               </div>
//             </div>
//           </div>

//           <div id="group-ev-solar-smart" className="services-card-group hidden">
//             <div className="services-card">
//               <div className="services-card__image-wrapper">
//                 <img src="" alt="" />
//               </div>
//               <div className="services-card__h3_wrapper">
//                 <h3></h3>
//               </div>
//             </div>
//           </div>

//           <div
//             id="group-lighting-services"
//             className="services-card-group hidden"
//           >
//             <div className="services-card">
//               <div className="services-card__image-wrapper">
//                 <img src="" alt="" />
//               </div>
//               <div className="services-card__h3_wrapper">
//                 <h3></h3>
//               </div>
//             </div>
//           </div>

//           <div id="group-wiring-repairs" className="services-card-group hidden">
//             <div className="services-card">
//               <div className="services-card__image-wrapper">
//                 <img src="" alt="" />
//               </div>
//               <div className="services-card__h3_wrapper">
//                 <h3></h3>
//               </div>
//             </div>
//           </div>
//         </div>
//         <canvas className="services-lines"></canvas>
//       </div>
//     );
// }
