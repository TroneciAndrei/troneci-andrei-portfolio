(function () {
  emailjs.init('ldmL0nhg4LijzqRUQ');
})();

// listen to the form submission
document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const serviceID = 'service_o76ypoa';
  const templateID = 'template_0bpmssw';

  // send the email here
  emailjs.sendForm(serviceID, templateID, this).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('SUCCESS!');
    },
    (error) => {
      console.log('FAILED...', error);
      alert('FAILED...', error);
    },
  );
});
