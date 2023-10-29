// Check if there's a stored visit date
if (localStorage.getItem('lastVisitDate')) {
    // Get the stored visit date as a timestamp
    const storedVisitTimestamp = parseInt(localStorage.getItem('lastVisitDate'));

    // Calculate the time difference in milliseconds
    const currentTime = Date.now();
    const timeDifference = currentTime - storedVisitTimestamp;

    // Calculate days and the message
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        // uncomment next line to test for example (last visited 3 days ago)
            // const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        // console.log(daysDifference);
    
    // Display the appropriate message based on the time difference
    if (daysDifference === 0) {
        document.querySelector('.welcome-message').innerHTML = "Back so soon!<br>Awesome!";
    } else if (daysDifference === 1) {
        document.querySelector('.welcome-message').innerHTML = "You last visited<br>1 day ago.";
    } else {
        document.querySelector('.welcome-message').innerHTML = `You last visited<br>${daysDifference} days ago.`;
    }
} else {
    // This is the user's first visit
    document.querySelector('.welcome-message').innerHTML = "Welcome!<br>Let us know if you have any questions.";
}

// Store the current visit date
localStorage.setItem('lastVisitDate', Date.now());