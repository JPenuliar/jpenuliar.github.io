// The library is available as a global variable 'sqlFormatter'
const format = window.sqlFormatter.format;

function formatSql() {
    // 1. Get values from all inputs
    const inputSql = document.getElementById('inputSql').value;
    const selectedDialect = document.getElementById('dialectSelect').value;
    const selectedCase = document.getElementById('caseSelect').value;
    const outputElement = document.getElementById('outputSql');

    // 2. Format the SQL using the dynamic options
    const formattedSql = format(inputSql, {
        language: selectedDialect, // Use the selected dialect
        keywordCase: selectedCase, // Use the selected case
        tabWidth: 2, 
    });

    // 3. Display the result
    outputElement.innerText = formattedSql;
}

// Function to handle copying the output to the clipboard
function copyToClipboard() {
    const outputElement = document.getElementById('outputSql');
    const textToCopy = outputElement.innerText;

    // Use the Clipboard API for modern browsers
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Optional: Provide visual feedback to the user
        alert("SQL query copied to clipboard!");
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}


// Format the initial text when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
    formatSql();
});
