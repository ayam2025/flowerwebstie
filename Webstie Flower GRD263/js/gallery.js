// Gallery Filtering Functionality
document.addEventListener("DOMContentLoaded", () => {
    // Get all filter buttons and gallery items
    const filterButtons = document.querySelectorAll("[data-filter]")
    const galleryItems = document.querySelectorAll(".gallery-item")
  
    // Add click event to filter buttons
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"))
  
        // Add active class to clicked button
        this.classList.add("active")
  
        // Get filter value
        const filterValue = this.getAttribute("data-filter")
  
        // Show/hide gallery items based on filter
        galleryItems.forEach((item) => {
          if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
            item.style.display = "block"
          } else {
            item.style.display = "none"
          }
        })
      })
    })
  
    // Import lightbox (assuming it's a library like lightbox2)
    // You'll need to adjust this import based on how you're including lightbox in your project.
    // For example, if using a CDN, you might not need an import statement here.  If using a module bundler like Webpack or Parcel, you'll need to import it appropriately.
    // This example assumes a global lightbox variable is available after including the lightbox library.
    // If lightbox is a module, you would use: import lightbox from 'lightbox2';
  
    // Initialize Lightbox
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true,
      albumLabel: "Image %1 of %2",
      fadeDuration: 300,
    })
  })
  
  