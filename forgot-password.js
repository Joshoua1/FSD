document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('forgotPasswordForm');
    const emailInput = document.getElementById('email');
    const logList = document.getElementById('logList');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const userEmail = emailInput.value;

       
        logActivity(`User submitted email: ${userEmail}`);

        
        setTimeout(() => {
            logActivity(`Password reset email sent to: ${userEmail}`);
        }, 2000);

        
        emailInput.value = '';
    });

    function logActivity(message) {
        const logItem = document.createElement('li');
        logItem.textContent = message;
        logList.appendChild(logItem);
    }
});
