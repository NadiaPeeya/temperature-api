const api_key = `635ce85c9428185f7a3cb18532e01b1f
`;
const searchTemp = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;


    fetch(url)
    .then(response => response.json())
    .then(data => displayWeather(data));
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayWeather = temp => {
    console.log(temp)
    setInnerText('name', temp.name);
    setInnerText('city', temp.main.temp );
    setInnerText('condition' , temp.weather[0].main );
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('image-icon');
    imgIcon.setAttribute('src',url );  
}