const path = ['imgs/happy-face.png','imgs/shy-face.png','imgs/angry-face.png']
const  character = Character`  
    padding-top: 1.8rem;
    ${path}
` 
root.insertAdjacentHTML('beforeend',character)