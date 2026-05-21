// /** 
//  * Services Block Global Data Provider
//  * Responsible ONLY for fetching data and notifying view.js.
//  */
// (async function() {
//     console.log("Services Block: Initializing Global Data Provider...");
//     try {
//         const response = await fetch('/wp-content/themes/crmorton-wp-theme/js/services-block.json');
        
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         // Store data globally
//         window.servicesData = await response.json();
        
//         // Signal that data is ready for any block instances to consume
//         window.dispatchEvent(new Event('servicesDataLoaded'));
        
//         console.log("Services Block: Global Data Loaded & Event Dispatched");
//     } catch (e) {
//         console.error("Services Block: Global Data Fetch Failed", e);
//     }
// })();
