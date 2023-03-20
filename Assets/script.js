

var resultsTextEl = document.querySelector('result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');


//api searcch link to be added

function searchAPI(query, format) {
    var locQueryUrl = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={9efdde7b3842ea6810258c0ef65cd389}';

    // if (format) {

    //     locQueryUrl = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={9efdde7b3842ea6810258c0ef65cd389}' + format + '/fo=json';
    // }
    // fetch(localQueryUrl)
    // .then(function (response) {
    //     if (!response.ok) {
    //         throw response.json();
    //     }
    //     return response.json();
    // })
    // .then(function (locRes){
    //     resultsTextEl.textContent = locRes.search.query;

    //     console.log(locRes);

    //     if (!locRes.results.length) {
    //     console.log('No Results Found');
    //     resultContentEl.innerHTML = '<h3>No results found, Search again</h3>';
    //  }else {
    //     resultsContentEl.textContent = '';
    //     for (var i = 0; i < locRes.results.length; i++) {
    //         printResults(locRes.results[i]);
    //     }
    //  }
    // })
    // .catch(function (error){
    //     console.log(error)
    // });
    console.log(searchAPI());

    //geocode api 
    function searchAPI(query, format) {
    var locQueryUrl = "//api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={9efdde7b3842ea6810258c0ef65cd389"};
    
}

// questions for tutor:
// how to get tehese Api's to work? What format, how to plug them in. 


