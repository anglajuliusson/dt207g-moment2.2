const apiUrl = "http://127.0.0.1:3000/api/work_experiences";

// Funktion för att hämta och skriva ut poster
async function loadWorkExperiences() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();         

        const tabelBody = document.querySelector(".work_experience_table tbody");
        tabelBody.innerHTML = ""; // Töm tabellen först

        // Utskrift
        data.forEach(work => {
            const row = `
                <tr>
                    <td>${work.id}</td>
                    <td>${work.companyname}</td>
                    <td>${work.jobtitle}</td>
                    <td>${work.location}</td>
                    <td>${work.startdate.substring(0, 10)}</td>
                    <td>${work.enddate.substring(0, 10)}</td>
                </tr>
                `;
                tabelBody.innerHTML += row; 
        });
        } catch (err) {
            console.error("Kunde inte hämta data: ", err);
        }
    }
 
// Ladda data automatiskt när sidan öppnas
if (document.querySelector(".work_experience_table")) {
    loadWorkExperiences();
}