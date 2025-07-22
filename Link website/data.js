const data = document.querySelectorAll('h1')
const emoji = ['▶️',"🎬",'📚']

data.forEach((button,number) =>{
    const original = button.innerText

    button.addEventListener('mouseenter', ()=> {
        button.innerText = emoji[number]
    });

    button.addEventListener('mouseleave',() => {
       button.innerText = original
    });
})
    

const checkbox = document.getElementById('darkmode-toogle');
const text = document.getElementById('text-dark');

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        document.body.classList.add('darkmode');
        text.innerText = 'Lightmode:';
    } else {
        document.body.classList.remove('darkmode');
        text.innerText = 'Darkmode:';
    }
});