function Snake () {

  this.x = 100
  this.y = 100
  this.x_speed = scale
  this.y_speed = 0
  this.score = 0
  this.tail = []
  this.current_direction = 'Right'
  this.draw = function () {
    context.fillStyle = "#dfba1e"
    for ( i = 0; i < this.tail.length; i++ ) {
      context.fillRect( this.tail[ i ].x, this.tail[ i ].y, scale, scale )
    }
    context.fillRect( this.x, this.y, scale, scale )
  }
  this.update = function () {

    // update length of tail, shifting all back by one
    for ( i = 0; i < this.tail.length - 1; i++ ) {
      this.tail[ i ] = this.tail[ i + 1 ]
    }
    // update for new tail
    this.tail[ this.score - 1 ] = { x: this.x, y: this.y }
    this.x += this.x_speed
    this.y += this.y_speed

    if ( this.x > canvas.width ) {
      this.x = 0
    }
    if ( this.x < 0 ) {
      this.x = canvas.width
    }
    if ( this.y > canvas.height ) {
      this.y = 0
    }
    if ( this.y < 0 ) {
      this.y = canvas.height
    }
  }

  this.change_direction = function ( direction ) {
    console.log(this.current_direction, direction)
    if ( this.current_direction === 'Up' || this.current_direction === 'Down' ) {
      switch ( direction ) {
        case 'Left':
          this.x_speed = -scale
          this.y_speed = 0
          this.current_direction= 'Left'
          break;
        case 'Right':
          this.x_speed = scale
          this.y_speed = 0
          this.current_direction= 'Right'
          break;
        default:
          break;
      }
    }

    if ( this.current_direction === 'Left' || this.current_direction === 'Right' ) {
      switch ( direction ) {
        case 'Down':
          this.x_speed = 0
          this.y_speed = scale
          this.current_direction= 'Down'
          break;
        case 'Up':
          this.x_speed = 0
          this.y_speed = -scale
          this.current_direction= 'Up'
          break;
        default:
          break;
      }
    }

    // switch ( direction ) {
    //   case 'Down':
    //     this.x_speed = 0
    //     this.y_speed = scale
    //     break;
    //   case 'Up':
    //     this.x_speed = 0
    //     this.y_speed = -scale
    //     break;
    //   case 'Left':
    //     this.x_speed = -scale
    //     this.y_speed = 0
    //     break;
    //   case 'Right':
    //     this.x_speed = scale
    //     this.y_speed = 0
    //     break;
    //   default:
    //     break;
    // }
  }

  this.eat = function ( fruit ) {

    if ( this.x === fruit.x && this.y === fruit.y ) {
      this.score++
      return true
    }
    return false
  }

  this.collision = function () {
    for ( i = 0; i < this.tail.length; i++ ) {
      if ( this.x === this.tail[ i ].x && this.y === this.tail[ i ].y ) {

        // reset tail and score
        this.tail = []
        this.score = 0
        return true
      }
      return false
    }
  }
}

