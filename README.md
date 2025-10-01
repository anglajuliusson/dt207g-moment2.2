# Ditt digitala CV 

## Beskrivning
Detta är en webbapplikation för att hantera och visa arbetserfarenheter i ett digitalt CV. Applikationen är uppdelad i en backend-webbtjänst som hanterar data och en fristående frontend som konsumerar denna tjänst.  

Backend är byggd med **Node.js**, **Express** och **MySQL**, och tillåter CRUD-operationer (Create, Read, Update, Delete) på arbetserfarenheter. Frontend är byggd med ren **HTML**, **CSS** och **JavaScript**, utan ramverk, och visar data i tabeller samt låter användaren lägga till och ta bort poster.

## Funktionalitet
- Visa alla lagrade arbetserfarenheter i en tabell.  
- Lägga till nya arbetserfarenheter via ett formulär.  
- Ta bort poster direkt från tabellen med en knapp.  
- Responsiv design: tabellen anpassar sig för mindre skärmar genom att visa varje post som ett block.  
- Formulärvalidering för att säkerställa att alla fält är ifyllda innan posten skickas.  

## Teknisk information
- **Backend:** Node.js med Express  
- **Databas:** MySQL  
- **Frontend:** HTML, CSS, JavaScript  
- **API:** `GET /api/work_experiences`, `POST /api/work_experiences`, `PUT /api/work_experiences/:id`, `DELETE /api/work_experiences/:id`  
- **Databas-server:** MySQL, med en tabell `works` innehållande kolumnerna `id`, `companyname`, `jobtitle`, `location`, `startdate` och `enddate`. `id` är `AUTO_INCREMENT PRIMARY KEY`.  

## Undersidor
- **index.html** – Visar alla poster i en tabell.  
- **add.html** – Formulär för att lägga till nya arbetserfarenheter.  
- **about.html** – Beskriver webbplatsen, dess syfte och information om databasen.  

## Slutsatser
Under arbetet med denna webbapplikation har jag lärt mig hur man kopplar samman en backend-API med en fristående frontend och hanterar JSON-data. Jag har även förstått hur man implementerar enkel CRUD-funktionalitet med ett REST-API. Jag har fått erfarenhet av att arbeta med formulärvalidering, dynamisk uppdatering av DOM och att hantera felmeddelanden på ett användarvänligt sätt.  

Projektet visar tydligt hur frontend och backend kan kommunicera och hur man kan bygga användarvänliga gränssnitt för datahantering utan att använda tunga ramverk.  
