const level = ["easy","medium","hard"]
const slide = Slide`
    display: flex;
    justify-content: space-around;
    padding-top: 1.8rem;
    ${level}
    color: #c56cf0;
    text-decoration: none;
    cursor:pointer;
` 
root.insertAdjacentHTML('beforeend',slide)

const char = document.querySelector("img") 

document.querySelector("#easy").onclick = function(){
    char.src = path[0]
}
document.querySelector("#medium").onclick = function(){
    char.src = path[1]
}
document.querySelector("#hard").onclick = function(){
    char.src = path[2]
}