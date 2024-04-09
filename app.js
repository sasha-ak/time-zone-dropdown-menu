function showSelectedCountry(event) {
  if (event.target.value.length > 0) {
    alert(event.target.value);
  }
}

let countriesSelect = document.querySelector("#countries");

countriesSelect.addEventListener("change", showSelectedCountry);
