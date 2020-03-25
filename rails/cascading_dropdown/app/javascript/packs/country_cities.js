import Rails from '@rails/ujs';
console.log("Countries!");
var country_select, city_select, selected_country;
window.addEventListener("load", () => {
  console.log("L");
  country_select = document.querySelector("select#profile_country");
  city_select = document.querySelector("select#profile_city");
  country_select.addEventListener('change', (event) => {
    console.log(event.target.selectedIndex);
    console.log(city_select);
    selected_country = country_select.selectedIndex;
    Rails.ajax({
      url: "/cities_by_country/" + selected_country,
      type: "get",
      data: "",
      success: function (data) {
        console.log(data);
        city_select.innerHTML = data;

       },
      error: function (data) { }
    })
  })
});
