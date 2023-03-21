

var resultsTextEl = document.querySelector('result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');
var citiesSearched = document.querySelector('#cities-searched');

//api search link to be added

 //geocode api 
var locQueryUrl = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=9efdde7b3842ea6810258c0ef65cd389";
fetch(locQueryUrl)
.then(function(response){
  return response.json();
}) 

.then(function (data){
  var lat = (data[0].lat);
  var lon = (data[0].lon);
  var QueryUrl = 'http://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&appid=9efdde7b3842ea6810258c0ef65cd389';
fetch(QueryUrl)

.then(function (response){
  return response.json();
})

.then(function (data){
  var city = (data.city);
  var weather = (data.weather);
console.log(data.city);
console.log(data);
})
});
    
    //fetching the API parameters:
     function displayWeather (data) {
      const { name } = data;
      const { lon } = data.coord;
      const { lat } = data.coord;
      const { icon, description } = data.weather[0];
      const { feels_like } = data.main;
      const { temp, humidity } = data.main;
      const {temp_min} = data.main;
      const {temp_max} = data.main;
      const { pressure } = data.main;
      const { speed } = data.wind;
      const { deg } = data.wind;
      const { visibility } = data;
      const { all } = data.clouds;
      const { gust } = data.wind;
      const {timezone} = data;
      const { sunrise } = data.sys;
      const { sunset } = data.sys;
     };
    
  //Displaying the results:
  //     document.querySelector(".city").innerText = "Weather: " + name;
  //     document.querySelector(".lon").innerText = "Longitude: " + lon;
  //     document.querySelector(".lat").innerText = "Latitude: " + lat;
  //     document.querySelector(".icon").src =
  //       "https://openweathermap.org/img/wn/" + icon + ".png";
  //     document.querySelector(".description").innerText = description;
  //     document.querySelector(".temp").innerText = temp + "°C";
  //     document.querySelector(".feels-like").innerText = "Temperature feels like: " + feels_like + "°C";
  //     document.querySelector(".temp_min").innerText = "Minimum Temperature: " + temp_min + "°C";
  //     document.querySelector(".temp_max").innerText = "Maximum Temperature: " + temp_max + "°C";
  //     document.querySelector(".humidity").innerText =
  //       "Humidity: " + humidity + "%";
  //     document.querySelector(".visibility").innerText = "Visibility: " + visibility + " meters";
  //     document.querySelector(".cloudiness").innerText = "Cloudiness: " + all + "%";
  //     document.querySelector(".pressure").innerText = "Atmospheric Pressure: " + pressure + " hPa";
  //     document.querySelector(".wind").innerText =
  //       "Wind speed: " + speed + " km/h";
  //     document.querySelector(".wind-deg").innerText = "Wind degrees: " + deg + "°";
  //     document.querySelector(".wind-gust").innerText = "Wind gust: " + gust + " m/s";
  //     document.querySelector(".sunrise").innerText = "Sunrise: " + window.moment(sunrise * 1000).format('HH:mm a');
  //     document.querySelector(".sunset").innerText = "Sunset: " + window.moment(sunset * 1000).format('HH:mm a');
  //     document.querySelector(".weather").classList.remove("loading");
  //     document.body.style.backgroundImage =
  //       "url('https://source.unsplash.com/1600x900/?')"; 
    
  
    
  //   function search () {
  //     this.fetchWeather(document.querySelector(".search-formr").value);
  //   }
  
  
  // document.querySelector(".btn").addEventListener("click", function () {
  //   weather.search();
  // });
  


 




// showing cities searched:




function handleFormSubmit(event) {
    event.preventDefault();
  
    var citiesSearched = $('input[name="city-input"]').val();
  
    if (!citiesSearched) {
      console.log('No Cities Searched');
      return;
    }
  
    var searchFormEl = $(
      '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
    );
    searchFormEl.text(citiesSearched);
  
    // add delete button to remove shopping list item
    citiesSearchedEl.append(
      '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
    );
  
    // print to the page
    citiesSearchedEl.append(citiesSearchedEl);
  
    // clear the form input element
    $('input[name="cities-input"]').val('');
  }
  
  // TODO: Create a function to handle removing a list item when `.delete-item-btn` is clicked
  
  // TODO: Use event delegation and add an event listener to `shoppingListEl` to listen for a click event on any element with a class of `.delete-item-btn` and execute the function created above
  
  // citiesSearchedEl.on('submit', handleFormSubmit);
  