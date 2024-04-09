function showSelectedCountry(event) {
  if (event.target.value === "paris") {
    alert(
      `It is currently ${moment()
        .tz(`Europe/Paris`)
        .format(`dddd, MMMM D, YYYY h:mm A`)} in Europe/Paris`
    );
  }
  if (event.target.value === "sydney") {
    alert(
      `It is currently ${moment()
        .tz(`Australia/Sydney`)
        .format(`dddd, MMMM D, YYYY h:mm A`)} in Australia/Sydney`
    );
  }
  if (event.target.value === "tokyo") {
    alert(
      `It is currently ${moment()
        .tz(`Asia/Tokyo`)
        .format(`dddd, MMMM D, YYYY h:mm A`)} in Asia/Tokyo`
    );
  }
}

let countriesSelect = document.querySelector("#countries");

countriesSelect.addEventListener("change", showSelectedCountry);
