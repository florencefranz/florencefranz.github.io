function Fruit () {
  this.x
  this.y

  this.location = function () {
    this.x = ( Math.floor( Math.random() * rows - 1 ) + 1 ) * scale
    this.y = ( Math.floor( Math.random() * columns - 1 ) + 1 ) * scale
  }
  this.draw = function () {
    context.fillStyle = '#e8b4b7'
    context.fillRect(this.x, this.y, scale, scale)
  }
}