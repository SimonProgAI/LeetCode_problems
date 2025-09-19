const encodedData = 
    "aHR0cHM6Ly90bnM0bHBnbXppaXlwbnh4emVsNXNzNW55dTBuZnRvbC5sYW1iZGEtdXJsLnVzLWVhc3QtMS5vbi5hd3MvcmFtcC1jaGFsbGVuZ2UtaW5zdHJ1Y3Rpb25zLw=="; // A Base64-encoded string for "Hello World"
const decodedData = atob(encodedData); // Decode the string

console.log(decodedData); // Output: Hello World