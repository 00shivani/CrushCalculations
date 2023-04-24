
// 💗 Falling Hearts Animation 💗 //

function hearts () {
    var container = document.querySelector('main');

    var creat = document.createElement('div');
    creat.classList.add('hearts');
    creat.innerHTML = '💗';

    creat.style.fontSize = 40 + 'px';
    creat.style.left = Math.random() * 100 + 'vw';
    creat.style.animationDuration = Math.random() * 6 + 10 + 's';
    
    container.appendChild(creat);

    setTimeout ( () => {
        creat.remove();
    }, 8000);
    
}

setInterval (hearts, 1500);