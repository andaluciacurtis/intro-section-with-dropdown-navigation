const features = document.querySelector('.features-div');
const company = document.querySelector('.company-div');
const featuresDropdown = document.querySelector('.features-dropdown');
const companyDropdown = document.querySelector('.company-dropdown');
const featuresArrow = document.querySelector('.features-arrow');
const companyArrow = document.querySelector('.company-arrow');

features.addEventListener("mouseover", ()=> {
  featuresDropdown.classList.add("show");
  featuresArrow.src = "images/icon-arrow-up.svg";
});

features.addEventListener("mouseout", ()=> {
  featuresDropdown.classList.remove("show");
  featuresArrow.src = "images/icon-arrow-down.svg";
});

company.addEventListener("mouseover", ()=> {
  companyDropdown.classList.add("show");
  companyArrow.src = "images/icon-arrow-up.svg";
});

company.addEventListener("mouseout", ()=> {
  companyDropdown.classList.remove("show");
  companyArrow.src = "images/icon-arrow-down.svg";
});