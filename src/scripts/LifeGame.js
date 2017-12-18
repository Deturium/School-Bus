
import {
  Director,
  Scene,
  Sprite
} from "./GameEngine";

// config color

const borderColor = '#bdbdbd'
const liveColor = '#424242'
const deadColor = '#9e9e9e'


// LifeGame

class LifeGrid extends Sprite {

    constructor(scene, cellLength, border) {
        super(scene)

        this.cellLength = cellLength || 40
        this.border     = border || 2

        this.createGrid()
    }

    createGrid() {

        // adjust canvas
        const canvas = this.scene.d.canvas
        const rect = canvas.getBoundingClientRect()

        const cellLength = this.cellLength
        canvas.width  = ~~(rect.width  / cellLength) * cellLength
        canvas.height = ~~(rect.height / cellLength) * cellLength

        this.rows = canvas.height / cellLength
        this.cols = canvas.width  / cellLength

        this.grid     = new Array(this.rows)
        this.nextGrid = new Array(this.rows)

        for (let i = 0 ; i < this.rows; i++) {
            this.grid[i]     = new Array(this.cols)
            this.nextGrid[i] = new Array(this.cols)

            for(let j = 0; j < this.cols; j++) {
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

        for (let x = 1; x < this.rows - 1; x++) {
            for (let y = 1; y < this.cols - 1; y++) {
                this.grid[x][y] = Math.random()*10 < 2 ? true : false
            }
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
            if (grid[i+x][j+y])
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
        const ctx        = this.scene.ctx
        const grid       = this.grid
        const cellLength = this.cellLength
        const border     = this.border

        ctx.fillStyle = borderColor
        ctx.fillRect(j * cellLength, i * cellLength, cellLength, cellLength)


        ctx.fillStyle = grid[i][j] ? liveColor : deadColor
        ctx.fillRect(j * cellLength + border, i * cellLength + border,
            cellLength - 2*border, cellLength - 2*border)
    }

    update() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.updateCell(i, j)
            }
        }

        //swap
        [this.grid, this.nextGrid] = [this.nextGrid, this.grid]
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

    constructor(driector) {
        super(driector)

        this.createScene()
        this.registerAction()
    }

    createScene() {
        this.lifeGrid = new LifeGrid(this)

        this.addSprite(this.lifeGrid)
    }

    registerAction() {
        // this.d.canvas.addEventListener('click', () => {
            // const lifeGrid   = this.lifeGrid

            // const mouse      = this.d.listener.mouse
            // const cellLength = lifeGrid.cellLength

            // const i = Math.floor(mouse.y / cellLength)
            // const j = Math.floor(mouse.x / cellLength)
            // lifeGrid.grid[i][j] = !lifeGrid.grid[i][j]

            // this.d.draw()
        // })

        let timer = null

        window.addEventListener('resize', () => {
            if (timer)
                clearTimeout(timer)

            timer = setTimeout(() => {
                this.lifeGrid.createGrid()
                this.lifeGrid.draw()
            }, 1500)
        })
    }
}


function __main(canvas) {
  const D = new Director(canvas, null, {
    fps: 1,
    enablePause: false
  });

  const scene = new LifeGameScene(D);
  D.setScene(scene).run();
}

export default __main
