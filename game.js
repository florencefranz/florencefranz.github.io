const canvas = document.querySelector( '.canvas' )
const context = canvas.getContext( '2d' )
const scale = 25
const rows = canvas.height / scale
const columns = canvas.width / scale
var snake
( function setup () {
  snake = new Snake()
  fruit = new Fruit()
  fruit.location()

  snake.draw()
  window.setInterval( () => {
    context.clearRect( 0, 0, canvas.width, canvas.height )
    fruit.draw()
    snake.update()
    snake.draw()

    if ( snake.eat( fruit ) ) {
      fruit.location()
    }

    

    snake.collision()

    document.querySelector('.score').innerText = snake.score
  }, 250 )
}() )

window.addEventListener( 'keydown', ( ( event ) => {
  const direction = event.key.replace( 'Arrow', '' )
  snake.change_direction( direction )
} ) )