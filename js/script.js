const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const size = 30
//ctx.fillStyle = "red"
//ctx.fillRect(300,300,50,50)

//a cobra sera desenhada com um array
const snake = [
    {x:200, y:200},
    {x:230, y:200},
    {x:260,y:230}

]

//função que desenha a cobra na tela
const drawsnake = () => {
    ctx.fillStyle = "#ddd"
    //ctx.fillRect(snake[0].x, snake[0].y, size,size)
    //percorrer o array snake
    snake.forEach((position,index) => {
        if(index == snake.lenght - 1){
            ctx.fillStyle = "blue"

        }
        ctx.fillRect(position.x, position.y, size, size)
})

}


drawsnake()