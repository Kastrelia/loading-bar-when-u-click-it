function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('loadingWrapper').addEventListener('click', function() {
    const loadingBar = document.getElementById('loadingBar');
    const randomColor = getRandomColor();

    if (loadingBar.style.width === '100%') {
        loadingBar.style.width = '0';
    } else {
        loadingBar.style.width = '100%';
    }
    loadingBar.style.backgroundColor = randomColor;
});
