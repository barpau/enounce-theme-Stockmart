document.addEventListener("DOMContentLoaded", function(event) {
  let scriptEle2 = document.createElement("script");
  scriptEle2.setAttribute("src", "https://app.esyncer.com/js/fo.js?v=" + Math.floor(Math.random() * 100000000));
  document.body.appendChild(scriptEle2);
  getProductTags();
});



function getProductTags() {
// Get the URL of the parent window
  var parentURL = window.opener.document.location.href;

// Get the product handle from the parent window URL
  var productHandle = parentURL.split("/").pop();

  Shopify.getProduct(productHandle, function (product) {
    var tags = product.tags.split(","); // Gets the product tags and splits them into an array

// Do something with the obtained labels
    console.log(tags); // Print the labels in the browser console
  });
}




