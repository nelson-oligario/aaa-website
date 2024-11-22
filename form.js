function showEvent(){

    let registrationLevel = document.querySelectorAll('input[id="vip"]')
    let eventOptions = document.querySelector('.event')
    let

    if(registrationLevel.checked){
        eventOptions.style.display = none;
    }
    else{
        eventOptions.style.display = "grid" 
    }
}