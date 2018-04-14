
import {
  Director,
  Scene,
  Sprite
} from "./GameEngine";

// config color

// const borderColor = '#444'
const borderColor = '#1f1f1f'
const liveColor = '#444'
const deadColor = '#1f1f1f'

// config cell
const cellLength = 40
const border = 1

import initState from './State404'


// LifeGame

class LifeGrid extends Sprite {

  constructor(scene) {
    super(scene)

    this.cellLength = cellLength
    this.border = border

    this.createGrid()
  }

  createGrid() {

    // adjust canvas
    const canvas = this.scene.d.canvas
    const rect = canvas.getBoundingClientRect()

    const cellLength = this.cellLength
    canvas.width = ~~(rect.width / cellLength) * cellLength
    canvas.height = ~~(rect.height / cellLength) * cellLength

    this.rows = canvas.height / cellLength
    this.cols = canvas.width / cellLength

    this.grid = new Array(this.rows)
    this.nextGrid = new Array(this.rows)

    for (let i = 0; i < this.rows; i++) {
      this.grid[i] = new Array(this.cols)
      this.nextGrid[i] = new Array(this.cols)

      for (let j = 0; j < this.cols; j++) {
        this.grid[i][j] = this.nextGrid[i][j] = false
      }
    }

    this._init()
  }

  _init() {
    // const lives = [
    //     [3, 6], [4, 6], [5, 7], [2, 8], [3, 9], [4, 9],

    //     // 滑翔机
    //     [8, 10], [9, 11], [9, 12], [8, 12], [7, 12],
    // ]

    // for (let [x, y] of lives) {
    //     this.grid[x][y] = true
    // }

    // random alive
    // for (let x = 1; x < this.rows - 1; x++) {
    //     for (let y = 1; y < this.cols - 1; y++) {
    //         this.grid[x][y] = Math.random()*10 < 2 ? true : false
    //     }
    // }

    // all dead
    // for (let x = 1; x < this.rows - 1; x++) {
    //     for (let y = 1; y < this.cols - 1; y++) {
    //         this.grid[x][y] = false
    //     }
    // }


    // init with initState
    for (let x = 1; x < this.rows - 1; x++) {
      for (let y = 1; y < this.cols - 1; y++) {
        this.grid[x][y] = initState[x][y] ? true : false
      }
    }

    // add some random cell
    const randomCnt = 10
    for (let i = 0; i < randomCnt; i++) {
      this.grid[~~(Math.random() * this.rows)][~~(Math.random() * this.cols)] = Math.random() < 0.5 ? true : false
    }
  }

  updateCell(i, j) {
    /* rules:
        1. 如果一个生命周围的生命少于2个，它在回合结束时死亡
        2. 如果一个生命周围的生命超过3个，它在回合结束时死亡
        3. 如果一个死格子周围有3个生命，它在回合结束时获得生命
        2. 如果一个生命周围有2或3个生命，它在回合结束时保持原样
      */

    const grid = this.grid

    if (i === 0 || j === 0 ||
      i === this.rows - 1 || j === this.cols - 1) {
      this.nextGrid[i][j] = false
      return
    }

    let cnt = 0;
    const seq = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1], [0, 1],
      [1, -1], [1, 0], [1, 1],
    ]

    for (let [x, y] of seq) {
      if (grid[i + x][j + y])
        cnt++
    }

    if (cnt < 2 || cnt > 3) {
      this.nextGrid[i][j] = false
    }

    if (cnt === 3) {
      this.nextGrid[i][j] = true
    }

    if (cnt === 2) {
      this.nextGrid[i][j] = grid[i][j]
    }
  }

  drawCell(i, j) {
    const ctx = this.scene.ctx
    const grid = this.grid
    const cellLength = this.cellLength
    const border = this.border

    ctx.fillStyle = borderColor
    ctx.fillRect(j * cellLength, i * cellLength, cellLength, cellLength)


    ctx.fillStyle = grid[i][j] ? liveColor : deadColor
    ctx.fillRect(j * cellLength + border, i * cellLength + border,
      cellLength - 2 * border, cellLength - 2 * border)
  }

  update() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.updateCell(i, j)
      }
    }

    //swap
    ;[this.grid, this.nextGrid] = [this.nextGrid, this.grid]
  }

  draw() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.drawCell(i, j)
      }
    }
  }
}

class LifeGameScene extends Scene {

  constructor(driector, initState) {
    super(driector)

    this.createScene()
    this.registerAction()
  }

  createScene() {
    this.lifeGrid = new LifeGrid(this, initState)
    this.addSprite(this.lifeGrid)
  }

  registerAction() {
    this.d.canvas.addEventListener('click', () => {
      const lifeGrid = this.lifeGrid

      const mouse = this.d.listener.mouse
      const cellLength = lifeGrid.cellLength

      const i = Math.floor(mouse.y / cellLength)
      const j = Math.floor(mouse.x / cellLength)
      lifeGrid.grid[i][j] = !lifeGrid.grid[i][j]

      this.d.draw()
    })

    // export grid state
    this.d.canvas.addEventListener('contextmenu', (e) => {
      e.preventDefault()

      const lifeGrid = this.lifeGrid
      const logGrid = new Array(this.rows)

      for (let i = 0; i < lifeGrid.rows; i++) {
        logGrid[i] = new Array(lifeGrid.cols)
        for (let j = 0; j < lifeGrid.cols; j++) {
          logGrid[i][j] = lifeGrid.grid[i][j] ? 1 : 0
        }
      }

      console.table(logGrid)
    })

    // game pause
    this.d.listener.on('p', () => {
      const driector = this.d

      if (driector.pause) {
        driector.resume()
      } else {
        driector.stop()
      }
    }, true)


    // let timer = null

    // window.addEventListener('resize', () => {
    //   if (timer)
    //     clearTimeout(timer)

    //   timer = setTimeout(() => {
    //     this.lifeGrid.createGrid()
    //     this.lifeGrid.draw()
    //   }, 1500)
    // })
  }
}


function _main(canvas) {
  const driector = new Director(canvas, null, {
    fps: 1,
  })

  const scene = new LifeGameScene(driector, initState)
  driector.setScene(scene)

  return driector
}

export default _main
