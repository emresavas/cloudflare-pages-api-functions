document.addEventListener('DOMContentLoaded', function() {
    const testApiButton = document.getElementById('testApi');
    const apiResult = document.getElementById('apiResult');
    
    testApiButton.addEventListener('click', async function() {
        try {
            // Display loading message
            apiResult.textContent = 'Loading...';
            
            // Make the API call
            const response = await fetch('/api/hello');
            const data = await response.json();
            
            // Display the result
            apiResult.textContent = JSON.stringify(data, null, 2);
        } catch (error) {
            apiResult.textContent = `Error: ${error.message}`;
        }
    });
});
