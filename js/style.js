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
        width: 40vw;
        height: 60vh; 
        font-family: 'Press Start 2P', cursive;
        text-align: center;
        padding-top: 4rem;
    }
</style>`

const head =document.querySelector("head").insertAdjacentHTML("beforeend",style)