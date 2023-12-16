document.addEventListener('DOMContentLoaded', function () {
  var quantityElement = document.querySelector('.quantity');
  var incrementButton = document.querySelector('.increment');
  var decrementButton = document.querySelector('.decrement');
  var baseAmountElement = document.querySelector('.base-amount');
  var gstElement = document.querySelector('.gst-amount');
  var totalAmountElement = document.querySelector('.total-amount');
  var participantFormsContainer = document.querySelector('.participant-forms-container');

  var quantity = 1;
  var baseAmount = 20500;
  var gstRate = 0.18; 

  function updateQuantity() {
    quantityElement.textContent = quantity;
    updateBaseAmount();
    updateParticipantForms();
  }

  function updateBaseAmount() {
    var totalAmount = quantity * baseAmount;
    var gstAmount = totalAmount * gstRate;
    var totalIncludingGST = totalAmount + gstAmount;

    baseAmountElement.textContent = formatCurrency(baseAmount * quantity);
    gstElement.textContent = formatCurrency(gstAmount);
    totalAmountElement.textContent = formatCurrency(totalIncludingGST);
  }
  function updateParticipantForms() {
    participantFormsContainer.innerHTML = '';

    for (var i = 2; i <= quantity; i++) {
        var participantForm = document.createElement('div');
        participantForm.classList.add('participant-form');
        participantForm.innerHTML = `
            <h2>Participant ${i} Information</h2>
            <div class="divi">
                <div class="divy">
                    <input type="text" id="participantFirstName${i}" name="participantFirstName${i}" placeholder="Participant ${i} First Name*" required>
                </div>
                <div class="divy">
                    <input type="text" id="participantLastName${i}" name="participantLastName${i}" placeholder="Participant ${i} Last Name*" required>
                </div>
            </div>
            <div class="divi">
                <div class="divy">
                    <input type="text" id="participantAddress${i}" name="participantFirstName${i}" placeholder="Participant ${i} Address*" required>
                </div>
                <div class="divy">
                    <input type="text" id="participantPhoneNumber${i}" name="participantPhoneNumber${i}" pattern="[0-9]{10}" placeholder="Participant ${i} Phone Number*" required>
                </div>
            </div>
                    <button type="button">Save & Proceed</button>
        `;
        participantFormsContainer.appendChild(participantForm);
    }
}
  function increment() {
    if (quantity < 10) {
      quantity++;
      updateQuantity();
    }
  }

  function decrement() {
    if (quantity > 1) {
      quantity--;
      updateQuantity();
    }
  }

  function formatCurrency(amount) {
    return 'INR ' + amount.toFixed(2);
  }

  incrementButton.addEventListener('click', increment);
  decrementButton.addEventListener('click', decrement);

  updateQuantity();
});
