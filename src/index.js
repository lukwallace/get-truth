const button = document.getElementById('button');

button.addEventListener('click', (e) => {
    const wipe = document.getElementById('wipe')
    wipe.className = "enlarge";
    window.setTimeout(() => {
        wipe.className = "clear"
        window.setTimeout(() => {
            wipe.className = "reset";
            window.setTimeout(() => {
                wipe.className = "";
            }, 2000)
        }, 2000);
    }, 2000);
    e.target.className = 'no-events';
    window.setTimeout(() => {
        e.target.className = '';
    }, 6000);
});