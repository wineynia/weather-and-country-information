# Weather and Country Data Fetcher

This project is a responsive webpage that retrieves weather data from the [OpenWeatherMap API](https://openweathermap.org/api) and country information from the [REST Countries API](https://restcountries.com), utilizing modern JavaScript practices. The purpose is to demonstrate proficiency in working with APIs, handling JSON data, and using HTML/CSS/JavaScript effectively.

## Features

- Fetches weather data based on user-inputted location.
- Retrieves country details using the REST Countries API.
- Dynamically displays JSON data on the webpage.
- Responsive design that adjusts to various screen sizes.
- User-triggered events to initiate API requests (via button clicks or form submissions).
- Error handling for failed requests and invalid parameters.
- Local storage implementation to save user searches.

## Technologies Used

- HTML
- CSS
- JavaScript (ES6+)
- Fetch API
- JSON

## Getting Started

### Prerequisites

- Ensure you have a modern web browser.
- An internet connection to fetch data from APIs.

### Installation

1. Clone the repository:

   git clone https: (https://github.com/wineynia/weather-and-country-information.git)

2. Navigate to the project directory:

   cd weather-country-fetcher

3. Open index.html in your preferred web browser.

## Usage
1. Enter a city name in the search bar and click the "Get Weather" button.
2. The weather and country data will be displayed dynamically.
3. The local storage feature allows you to save your latest searches.

## Implementation Details

### API Requests
 - Weather Data: Fetched from OpenWeatherMap based on user input.
 - Country Data: Retrieved using the country information related to the specified weather location.

### User Interaction
- Button Click: The user can retrieve weather details by clicking a button following their input.
- Error handling alerts the user in case of invalid searches.

### Dynamic HTML Updates
Data retrieved from the APIs will be rendered on the webpage without a full reload, showcasing properties like temperature, condition, and country name.

### Acknowledgments
Thanks to OpenWeatherMap and REST Countries API for providing extensive API resources.
Code

### Deployment
The finalized project is deployed here: (https://wineynia.github.io/weather-and-country-information/)
