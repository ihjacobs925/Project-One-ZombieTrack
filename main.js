let movementDisplay = document.getElementById('movement')
let game = document.getElementById('game')
let statusDisplay = document.getElementById('status')

// Getting context for drawing on canvas
let ctx = game.getContext('2d')
game.setAttribute('height', getComputedStyle(game)['height'])
game.setAttribute('width', getComputedStyle(game)['width'])

function Crawler(x, y, width, height, color) {
  this.x = x
  this.y = y
  this.color = color
  this.width = width
  this.height = height
  this.alive = true
  this.render = function() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

let hero = new Crawler(50, 200, 50, 50, 'hotpink')
let zombie = new Crawler(400, 150, 60, 100, '#bada55')

let movement = 10

let gameLoop = () => {
  // clear canvas
  ctx.clearRect(0, 0, game.width, game.height)
  // display gamestate on the DOM
  movementDisplay.innerText = `X: ${hero.x}\nY: ${hero.y}`
  // if ogre is alive
  if (zombie.alive) {
    // render the ogre
    zombie.render()
    // detect collision
    detectHit()
  }
  // render the hero
  hero.render()
}

let detectHit = () => {
  if (
    hero.x + hero.width >= zombie.x &&
    hero.x <= zombie.x + zombie.width &&
    hero.y <= zombie.y + zombie.height &&
    hero.y + hero.height >= zombie.y
    ) {
      endGame()
    }
  }
  
let endGame = () => {
  hero.alive = false
  statusDisplay.innerText = 'You Dodged the Zombies for the Gold Medal!'
  setTimeout(() => {
    clearInterval(gameInterval)
  }, 200)
}

let movementHandler = (e) => {  
  switch(e.key) {
    case 'w':
      hero.y -= movement// move up
      break
    case 'a':
      hero.x -= movement // move left
      break
    case 's':
      hero.y += movement // move down
      break
    case 'd':
      hero.x += movement// move right
  }
}

// set event listener for keydown
document.addEventListener('keydown', movementHandler)

// initializes the game
let gameInterval = setInterval(gameLoop, 100)


// Helper function so my computer doesn't explode
document.querySelector('#btm-left').addEventListener('click', () => {
  clearInterval(gameInterval)
})