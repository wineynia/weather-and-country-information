document.addEventListener("DOMContentLoaded", () => {
  const fetchButton = document.getElementById("fetch-button");
  const countryInput = document.getElementById("country-input");
  const countryInfoDiv = document.getElementById("country-info");

  fetchButton.addEventListener("click", () => {
    const countryName = countryInput.value.trim();
    if (!countryName) {
      alert("Please enter a country name.");
      return;
    }
    fetchCountryInfo(countryName).then(displayCountryInfo).catch(handleError);
  });

  const fetchCountryInfo = async (country) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    if (!response.ok) throw new Error("Country not found");
    return await response.json();
  };

  const displayCountryInfo = (data) => {
    const country = data[0];
    countryInfoDiv.innerHTML = `
          <h2>${country.name.common}</h2>
          <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" width="150"/>
          <p>Population: ${country.population}</p>
          <p>Region: ${country.region}</p>
          <p>Capital: ${country.capital[0]}</p>
      `;
    countryInfoDiv.style.display = "block";
    saveToLocalStorage(country.name.common);
  };

  const handleError = (error) => {
    console.error("Error fetching data:", error);
    alert(error.message);
  };

  const saveToLocalStorage = (country) => {
    let searches = JSON.parse(localStorage.getItem("searches")) || [];
    if (!searches.includes(country)) {
      searches.push(country);
      localStorage.setItem("searches", JSON.stringify(searches));
    }
  };
});
