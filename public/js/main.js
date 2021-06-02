const submitBtn = document.getElementById('submitBtn');
const searchText = document.getElementById('city');
const output = document.getElementById('city-name');
const temp = document.getElementById('temp_val');
const temp_status = document.getElementById('temp_status');
const data_hide = document.querySelector('.temperature');

//use event.preventDefault()  to prevent form from reloadingg the webpage
const getInfo =  async (event) =>{
  event.preventDefault();
    let cityname = searchText.value;
    if(cityname === ""){
      alert("Plz type city name!");
      output.innerText= "Oops! No results :(";
      data_hide.classList.add('data_hide');
    }
    else{
      try{
        let api = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=9b1d875febf7a35bcb7a8c1ca908d3f7`;
        const response = await fetch(api);
        const data = await response.json();
        const arr = [data];
      
        output.innerText = `${arr[0].name}, ${arr[0].sys.country}`;
        temp.innerText = (arr[0].main.temp - 273.15).toFixed(2);

        const tempMoods = arr[0].weather[0].main;
      

         //condition to check sunny or cloudy
      if (tempMoods == "Sunny") {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
      } else if (tempMoods == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (tempMoods == "Rainy") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color:#1C7FC8;'></i>";
      }

      data_hide.classList.remove('data_hide'); 

      }catch(err){
        output.innerText= "Plz.. enter a valid city";
        data_hide.classList.add('data_hide');
      }
    }
}

submitBtn.addEventListener('click', getInfo);