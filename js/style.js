const style = `<style>
    body{
        background-color:  #2c2c54;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    #root{
        box-sizing: border-box;
        background-color: #1e3799;
        width: 700px;
        height: 450px; 
        font-family: 'Press Start 2P', cursive;
        text-align: center;
        padding-top: 3rem;
    }
    div::before{
        content: '';
        display:inline-block;
        width: 15px;
        height: 15px;
        border-radius: 50%;
    }
    div:hover[id='easy']::before{
        background-color: green;
    }
    div:hover[id='medium']::before{
        background-color: yellow;
    }
    div:hover[id='hard']::before{
        background-color: red;
    }
</style>`

const head =document.querySelector("head").insertAdjacentHTML("beforeend",style)