const path = ['/home/luciano/Documents/curso-js-feliz/imgs/happy-face.png','/home/luciano/Documents/curso-js-feliz/imgs/shy-face.png','/home/luciano/Documents/curso-js-feliz/imgs/angry-face.png']
const  character = Character`  
    padding-top: 1.8rem;
    ${path}
` 
root.insertAdjacentHTML('beforeend',character)