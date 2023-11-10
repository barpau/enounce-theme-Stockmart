  document.addEventListener("DOMContentLoaded", function(event) {
  let scriptEle2 = document.createElement("script");
  let template4over = document.getElementsByClassName("template-product-4over_product");
  let templateSinalite = document.getElementsByClassName("template-product-sinalite_product");
  if(templateSinalite) { 
  scriptEle2.setAttribute("src", "https://app.esyncer.com/js/sl.js?v=" + Math.floor(Math.random() * 100000000));
  } else {
    console.log("fourover")
  scriptEle2.setAttribute("src", "https://app.esyncer.com/js/fo.js?v=" + Math.floor(Math.random() * 100000000));
  }
  document.body.appendChild(scriptEle2);
  });
      
  