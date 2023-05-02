const root = document.querySelector('html');
const switchBtn = document.querySelector('.switch-btn');
const content = document.querySelector('.content');

switchBtn.addEventListener('click', () => {
    root.classList.toggle('dark');
    if(root.classList.contains('dark')){
        content.innerHTML = 'This is Dark Mode'
    }
    else{
        content.innerHTML = 'This is Light Mode'
    }
})