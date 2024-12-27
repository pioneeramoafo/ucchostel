// Ensure the page scrolls to the top on load or refresh
window.onload = function () {
    window.scrollTo(0, 0);
};

function openGmailCompose() {
    const email = 'pioneeramoafo@gmail.com';
    const subject = 'User Complaint';
    const body = 'Type your complaint here...';
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
}
