document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault();
     
    document.getElementById('addressError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('postalCodeError').textContent = '';
    document.getElementById('formSuccess').textContent = '';
  
     const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const postalCode = document.getElementById('postalCode').value;
  
    const addressRegex = /^[a-zA-Zა-ჰ]+$/;
    const phoneRegex = /^\+(\d{1,3})\s?(\d{6,12})$/;
    const postalCodeRegex = /^\d{4,10}$/;
  
    let isValid = true;
  
       if (!addressRegex.test(address)) {
      document.getElementById('addressError').textContent = 'მისამართი უნდა შედგებოდეს მხოლოდ ასობგერებისგან.';
      isValid = false;
    }
 
    if (!phoneRegex.test(phone)) {
      document.getElementById('phoneError').textContent = 'ტელეფონის ნომერი უნდა იყოს ფორმატში +1234567890.';
      isValid = false;
    }
  
       if (!postalCodeRegex.test(postalCode)) {
      document.getElementById('postalCodeError').textContent = 'საფოსტო კოდი უნდა შეიცავდეს 4-დან 10-მდე ციფრს.';
      isValid = false;
    }
  
    if (isValid) {
      document.getElementById('formSuccess').textContent = 'ფორმა წარმატებით გაიგზავნა!';
    }
  });
  