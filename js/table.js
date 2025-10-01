const apiUrl = "http://127.0.0.1:3000/api/work_experiences";

// Funktion för att hämta och skriva ut poster
async function loadWorkExperiences() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();         

        const tabelBody = document.querySelector(".work_experience_table tbody");
        tabelBody.innerHTML = ""; // Töm tabellen först

        // Utskrift
        let allRows = "";
        data.forEach(work => {
            allRows += `
                <tr>
                    <td>${work.id}</td>
                    <td>${work.companyname}</td>
                    <td>${work.jobtitle}</td>
                    <td>${work.location}</td>
                    <td>${work.startdate.substring(0, 10)}</td>
                    <td>${work.enddate.substring(0, 10)}</td>
                    <td><button class="delete-btn" data-id="${work.id}">Ta bort</button></td>
                </tr>
                `;
        });
            tabelBody.innerHTML = allRows; // Utskrift av alla rader

        // Eventlyssnare för att ta bort, fungerar för alla knappaar
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
            const id = btn.getAttribute('data-id');
    
        try {
            const response = await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
            const data = await response.json();
    
            alert(data.message); // Visa meddelande till användaren
            loadWorkExperiences(); // Uppdatera tabellen efter borttagning
        } catch (err) {
            console.error("Något gick fel vid borttagning: ", err);
        }
    });
});
        } catch (err) {
            console.error("Kunde inte hämta data: ", err);
        }
    }   
 
// Ladda data automatiskt när sidan öppnas
if (document.querySelector(".work_experience_table")) {
    loadWorkExperiences();
}