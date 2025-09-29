const form = document.querySelector('.add_work_experience');
const apiUrl = "http://127.0.0.1:3000/api/work_experiences";

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Förhindra att sidan laddas om

  // Hämta värden från formuläret
  const work = {
    companyname: document.querySelector('.companyname').value,
    jobtitle: document.querySelector('.jobtitle').value,
    location: document.querySelector('.location').value,
    startdate: document.querySelector('.startdate').value,
    enddate: document.querySelector('.enddate').value
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(work)
    });

    const data = await response.json();

    // Visa meddelande om lyckad POST
    document.querySelector('.message').textContent = data.message;

    // Rensa formuläret
    form.reset();
  } catch (err) {
    document.querySelector('.message').textContent = "Något gick fel: " + err;
  }
});