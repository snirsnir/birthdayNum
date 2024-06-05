document.addEventListener('DOMContentLoaded', function() {
    // Set today's date as the default value for the event date
    var today = new Date().toISOString().substring(0, 10);
    document.getElementById('eventDate').value = today;
});
// JavaScript to handle form submission and signature pad
var canvas = document.getElementById('signature-pad');
var signaturePad = new SignaturePad(canvas);

function getSignatureDataUrl() {
    return signaturePad.toDataURL();
}

document.getElementById("eventForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var fullName = document.getElementById("fullName").value;
    var emailAddress = document.getElementById("emailAddress").value;
    var numParticipants = document.getElementById("numParticipants").value;
    var eventDate = document.getElementById("eventDate").value;
    var signature = getSignatureDataUrl();

    var formData = {
        fullName: fullName,
        emailAddress: emailAddress,
        numParticipants: numParticipants,
        eventDate: eventDate,
        signature: signature
    };

    // Assuming you're sending data to your server or an API endpoint
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://github.com/https://hooks.zapier.com/hooks/catch/14328377/3l18p7q/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Any additional headers
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Remove the form or hide it
        var form = document.getElementById("eventForm");
        form.style.display = 'none'; // Hides the form
        
        // Display a thank you message
        var thankYouMessage = document.createElement('p');
        thankYouMessage.textContent = 'הנתונים התקבלו בהצלחה, תודה על הגשת הטופס';
        document.querySelector('.container').appendChild(thankYouMessage);
        // Alternatively, replace the container's content
        // document.querySelector('.container').innerHTML = '<p>תודה על הגשת הטופס!</p>';
    })
    .catch((error) => {
        console.error('Error:', error);
        // Optionally, handle errors here (e.g., display an error message)
    });
});
