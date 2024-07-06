const countrySelect = document.getElementById('countryCode');

fetch('countries.json') // Replace 'countries.json' with your data source path
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      const option = document.createElement('option');
      option.value = country.code;
      option.text = `${country.name} (+${country.code})`;
      countrySelect.appendChild(option);
    });
  });
