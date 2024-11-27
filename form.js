// Select all radio buttons in the "second-information" container
const radioButtons = document.querySelectorAll('input[name="registrationLevel"]');

// Add event listeners to each radio button
radioButtons.forEach((radio) => {
  radio.addEventListener("change", function () {
    const vipInfo = document.querySelector(".vip-information");
    const paymentSection = document.querySelector(".payment-section");

    if (this.id === "vip" && this.checked) {
      vipInfo.style.display = "flex"; // Show VIP info if VIP is selected
      paymentSection.style.display = "flex"; // Show payment section
      document.querySelector('.reg-level').innerText = "VIP Admission"
      document.querySelector('.admission-fee').innerText = "P" + document.querySelector('#vip').value
      document.querySelector('.sub-total').innerText = "P" + document.querySelector('#vip').value
      document.querySelector('.total').innerText = "P" + document.querySelector('#vip').value

    } else {
      vipInfo.style.display = "none"; // Hide VIP info if not VIP
      paymentSection.style.display = this.checked ? "flex" : "none"; // Show payment section only if a radio is selected
    }
  });
});

document.querySelector('#general').addEventListener("change", function (){
    if(this.checked){
        document.querySelector('.reg-level').innerText = "General Admission"
        document.querySelector('.admission-fee').innerText = "P" + document.querySelector('#general').value
        document.querySelector('.sub-total').innerText = "P" + document.querySelector('#general').value
        document.querySelector('.total').innerText = "P" + document.querySelector('#general').value
    }
})

document.querySelector('#day').addEventListener("change", function (){
    if(this.checked){
        document.querySelector('.reg-level').innerText = "Day Pass"
        document.querySelector('.admission-fee').innerText = "P" + document.querySelector('#day').value
        document.querySelector('.sub-total').innerText = "P" + document.querySelector('#day').value
        document.querySelector('.total').innerText = "P" + document.querySelector('#day').value
    }
})

const accomList = document.querySelector('.fourth-information');
const accomRadios = document.querySelectorAll('input[name="accomodation"]');

// Function to update visibility
function updateVisibility() {
    accomList.style.display = document.querySelector('#accom-yes').checked ? 'flex' : 'none';
}

// Set initial visibility on page load
updateVisibility();

// Add change event listener to all radio buttons
accomRadios.forEach((radio) => {
    radio.addEventListener('change', updateVisibility);
});

