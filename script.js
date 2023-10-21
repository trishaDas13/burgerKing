let check = [...document.querySelectorAll('input')];
let btn = document.querySelector('button');
let orderID = document.querySelector('span');
let foods = document.querySelector(".foods");

btn.addEventListener('click', (e) =>{
    e.preventDefault();
    let foodItem = [];
    //* When no checkbox was checked.
    check.forEach((checkbox) => {
        if(checkbox.checked){
           foodItem.push(checkbox.value);
        }
    });
    if(foodItem.length == 0){
        alert("Please select a food item to order");
        return;
    }
    //! >>>>>> Promise part <<<<<<<
    btn.disabled = true;
    let myPromise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve();
        }, Math.floor(Math.random() * 3000) + 1000);
    });
    myPromise.then(() => {
        orderID.innerText = Math.floor(Math.random() * 1000);
        foodItem.forEach((orderdItem) => {
            switch(orderdItem){
                case "burger" : 
                foods.src = "https://www.safefood.net/getmedia/d81f679f-a5bc-4a16-a592-248d3b1dc803/burger_1.jpg?width=1280&height=720&ext=.jpg";
                break;
                case "fries" : 
                foods.src = "https://www.recipetineats.com/wp-content/uploads/2022/09/Fries-with-rosemary-salt_1.jpg";
                break;
                case "drinks" : 
                foods.src = "https://www.thespruceeats.com/thmb/iHmC1x1UNWoq4GP4i_81-xajw5g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/popular-screwdriver-variations-759820-hero-01-6f67f02622a54bbb8aeabd7eb65bb3a0.jpg"
                break;
            }
            foods.style.display = "inline-block";
            btn.disabled = false;
        });
    });
});
