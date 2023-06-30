let btn = document.querySelector("#search-btn");
let myInput = document.querySelector("#user-input");
let flag = document.querySelector("#flagPic");
let countryName = document.querySelector(".countryName");
let languagesName = document.querySelector(".languages")
let capitalName = document.querySelector('.capitalName');
let border = document.querySelector(".border");



btn.addEventListener('click',()=>{
    let finalInput = myInput.value;
   
    let apiUrl = `https://restcountries.com/v3.1/name/${finalInput}?fullText=true`
    fetch(apiUrl).then((responce)=> responce.json())
    .then((data)=>{
        console.log(data[0])
        console.log(data[0].capital[0])
        countryName.textContent = data[0].name.common
        capitalName.textContent = data[0].capital[0];
        flag.src = data[0].flags.png;
        languagesName.textContent = Object.values(data[0].languages).join(", ")
        border.textContent = data[0].borders.join(", ")
        
        
      
        
        
        
    })


    
})