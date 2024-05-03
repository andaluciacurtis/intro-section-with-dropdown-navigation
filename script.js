const features = document.querySelector('.features-div');
const company = document.querySelector('.company-div');
const featuresDropdown = document.querySelector('.features-dropdown');
const companyDropdown = document.querySelector('.company-dropdown');
const featuresPrev = document.querySelector('.features-prev');
const companyPrev = document.querySelector('.company-prev');
const featuresArrow = document.querySelector('.features-arrow');
const companyArrow = document.querySelector('.company-arrow');

featuresPrev.addEventListener("mouseover", ()=> {
  featuresDropdown.classList.add("show");
  featuresArrow.src = "images/icon-arrow-up.svg";
});

featuresPrev.addEventListener("mouseout", ()=> {
  featuresDropdown.classList.remove("show");
  featuresArrow.src = "images/icon-arrow-down.svg";
});

companyPrev.addEventListener("mouseover", ()=> {
  companyDropdown.classList.add("show");
  companyArrow.src = "images/icon-arrow-up.svg";
});

companyPrev.addEventListener("mouseout", ()=> {
  companyDropdown.classList.remove("show");
  companyArrow.src = "images/icon-arrow-down.svg";
});