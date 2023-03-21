

var resultsTextEl = document.querySelector('result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');
var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var citiesSearched = $('#cities-searched');

//api searcch link to be added

// function searchAPI(query, format) {
//     var locQueryUrl = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={9efdde7b3842ea6810258c0ef65cd389}';

//     if (format) {

//         locQueryUrl = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={9efdde7b3842ea6810258c0ef65cd389}' + format + '/fo=json';
//     }
//     fetch(localQueryUrl)
//     .then(function (response) {
//         if (!response.ok) {
//             throw response.json();
//         }
//         return response.json();
//     })
//     .then(function (locRes){
//         resultsTextEl.textContent = locRes.search.query;

//         console.log(locRes);

//         if (!locRes.results.length) {
//         console.log('No Results Found');
//         resultContentEl.innerHTML = '<h3>No results found, Search again</h3>';
//      }else {
//         resultsContentEl.textContent = '';
//         for (var i = 0; i < locRes.results.length; i++) {
//             printResults(locRes.results[i]);
//         }
//      }
//     })
//     .catch(function (error){
//         console.log(error)
//     });
//     console.log(searchAPI());

//     //geocode api 
//     function searchAPI(query, format) {
//     var locQueryUrl = "//api.openweathermap.org/geo/1.0/direct?q={city Sydney},{nsw code},{Australia code}&limit={limit}&appid={9efdde7b3842ea6810258c0ef65cd389"};
    
// }

// let weather = {
//     apiKey: "appid={9efdde7b3842ea6810258c0ef65cd389",
//     fetchWeather: function (city) {
//       fetch(
//         api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={9efdde7b3842ea6810258c0ef65cd389}' + format + '/fo=json' +
//           city +
//           "&units=metric&lang=en&appid=" +
//           this.apiKey
//       )

function getApi () {
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&cnt=3&appid={9efdde7b3842ea6810258c0ef65cd389}}' + format + '/fo=json";

    fetch (requestUrl)

        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    }
getApi ();
    
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

    
  //Displaying the results:
      document.querySelector(".city").innerText = "Weather: " + name;
      document.querySelector(".lon").innerText = "Longitude: " + lon;
      document.querySelector(".lat").innerText = "Latitude: " + lat;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".feels-like").innerText = "Temperature feels like: " + feels_like + "°C";
      document.querySelector(".temp_min").innerText = "Minimum Temperature: " + temp_min + "°C";
      document.querySelector(".temp_max").innerText = "Maximum Temperature: " + temp_max + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".visibility").innerText = "Visibility: " + visibility + " meters";
      document.querySelector(".cloudiness").innerText = "Cloudiness: " + all + "%";
      document.querySelector(".pressure").innerText = "Atmospheric Pressure: " + pressure + " hPa";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".wind-deg").innerText = "Wind degrees: " + deg + "°";
      document.querySelector(".wind-gust").innerText = "Wind gust: " + gust + " m/s";
      document.querySelector(".sunrise").innerText = "Sunrise: " + window.moment(sunrise * 1000).format('HH:mm a');
      document.querySelector(".sunset").innerText = "Sunset: " + window.moment(sunset * 1000).format('HH:mm a');
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?')"; 
    }
  
    
    function search () {
      this.fetchWeather(document.querySelector(".search-formr").value);
    }
  
  
  document.querySelector(".btn").addEventListener("click", function () {
    weather.search();
  });
  
//   event.key == "Enter") {
//         weather.search();document
//     .querySelector(".search-form")
//     .addEventListener("keyup", function (event) {
//       if (
// // 
  //Displaying Athens weather on page load
 

// questions for tutor:
// how to get tehese Api's to work? What format, how to plug them in. 


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
  
  citiesSearchedEl.on('submit', handleFormSubmit);
  

