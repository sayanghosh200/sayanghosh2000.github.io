document.addEventListener('DOMContentLoaded', (event) => {
    const noButton = document.getElementById('no');
    const yesButton = document.getElementById('yes');
    const answer = document.getElementById('answer');

    yesButton.addEventListener('click', () => {
        answer.textContent = 'I love you too baby 😁❤️';
    });

    noButton.addEventListener('mouseover', (event) => {
        const x = Math.random() * (window.innerWidth - noButton.clientWidth);
        const y = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
});
