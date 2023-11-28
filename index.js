function sendEmail() {
  var params = {
    name: document.getElementById('nameuser').value,
    email: document.getElementById('emaluser').value,
    message: `List booking: ${JSON.parse(localStorage.getItem('selectedItems')).map(item => item.title).join(', ')}.\n\n\nDate: ${document.getElementById('timeuser').value}.\n\n\nPhone: ${document.getElementById('phoneuser').value}`,
  };
console.log(JSON.parse(localStorage.getItem('selectedItems')))

  const serviceID = "service_zc6xizc";
  const templateID = "template_3vmxo3h";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      console.log(res);
      alert("Once you have scheduled an appointment, we will contact you to confirm");
    })
    .catch((err) => {
      console.log(err);
    });
}
