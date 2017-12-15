;(function () {

// config color

const borderColor = '#bdbdbd'
const liveColor = '#424242'
const deadColor = '#9e9e9e'


// Little Game Engine

const $ = document.querySelector.bind(document)
const log = console.log.bind(console)

class Director {

    constructor(canvas, resource, option) {
        this.canvas   = canvas
        this.ctx      = canvas.getContext('2d')
        this.scenes   = []
        this.listener = new Listener(this)

        // handle option
        this._init(option)

        this._load(resource)
    }

    _init(option) {
        if (!option) {
            return
        }

        this.fps   = option.fps || 40
        this.pause = false

        if (option.enablePause) {
            this.listener.on('p', () => {
                this.pause = !this.pause
            }, true)
        }

    }

    update() {
        const scenes = this.scenes
        scenes[scenes.length-1].update()
    }

    draw() {
        const scenes = this.scenes
        scenes[scenes.length-1].draw()
    }

    setScene(scene) {
        this.scenes[0] = scene
        return this
    }

    pushScene(scene) {
        this.scenes.push(scene)
        return this
    }

    popScene() {
        return this.scenes.pop()
    }

    _loop () {
        this.listener.handleEvent()
        if (!this.pause) {
            this.update()
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.draw()
        }
        setTimeout(this._loop.bind(this), 1000 / this.fps)
    }

    run() {
        this.draw()
        // remind to bind 'this'
        setTimeout(() => {
            this._loop()
        }, 1000 / this.fps)
    }

    changeFPS(fps) {
        this.fps = fps
    }

    _load(resource) {
        //todo: load resource

    }
}

class Listener {

    constructor(director) {
        this.d        = director
        this.downKeys = {}
        this.switches = {}
        this.mouse    = {
            x: 0,
            y: 0
        }
        this._pressEvents = {}
        this._switchEvent = {}

        window.addEventListener('keydown',  (event) => {
            this.downKeys[event.key] = true
        })

        window.addEventListener('keyup',  (event) => {
            this.downKeys[event.key] = false
            this.switches[event.key] = true
        })

        this.d.canvas.addEventListener('click', (event) => {
            this.mouse.x = event.offsetX
            this.mouse.y = event.offsetY
        })
    }

    // register event on Diretor
    on(key, callback, isSwitch) {
        if (isSwitch) {
            this._switchEvent[key] = callback
        } else {
            this._pressEvents[key] = callback
        }
        return this
    }

    off(key, isSwitch) {
        if (isSwitch) {
            delete this._switchEvent[key]
        } else {
            delete this._pressEvents[key]
        }
        return this
    }

    handleEvent() {
        for (let key in this.downKeys) {
            if (this.downKeys[key] && this._pressEvents[key]) {
                this._pressEvents[key]()
            }
        }

        for (let key in this.switches) {
            if (this.switches[key] && this._switchEvent[key]) {
                this._switchEvent[key]()
                this.switches[key] = false
            }
        }
    }
}

class Scene {

    constructor(director) {
        if (new.target === Scene) {
            throw new Error('class Scene should be inherited')
        }

        this.d       = director
        this.ctx     = director.ctx
        this.sprites = []
        this._pressEvents = {}
        this._switchEvent = {}
    }

    _handleEvent() {
        const downKeys = this.d.listener.downKeys
        const switches = this.d.listener.switches

        for (let key in downKeys) {
            if (downKeys[key] && this._pressEvents[key]) {
                this._pressEvents[key]()
            }
        }

        for (let key in switches) {
            if (switches[key] && this._switchEvent[key]) {
                this._switchEvent[key]()
                switches[key] = false
            }
        }
    }

    update() {
        this._handleEvent()

        // update sprites in this scene
        for (let spr of this.sprites) {
            spr.update()
        }
    }

    draw() {
        for (let spr of this.sprites) {
            spr.draw()
        }
    }

    addSprite(sprite) {
        this.sprites.push(sprite)
        return this
    }

    removeSprite(sprite) {
        this.sprites.splice(this.sprites.indexOf(sprite), 1)
        return this
    }

    // register event on Scene
    on(key, callback, isSwitch) {
        if (isSwitch) {
            this._switchEvent[key] = callback
        } else {
            this._pressEvents[key] = callback
        }
        return this
    }

    off(key, isSwitch) {
        if (isSwitch) {
            delete this._switchEvent[key]
        } else {
            delete this._pressEvents[key]
        }
        return this
    }
}

class Sprite {

    constructor(scene) {
        if (new.target === Sprite) {
            throw new Error('class Sprite should be inherited')
        }
        this.scene = scene
    }

    add() {
        this.scene.sprites.push(this)
    }

    remove() {
        this.scene.sprites.splice(this.scene.elements.indexOf(this), 1)
    }

    update() {

    }

    draw() {

    }
}



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


// create the game

;(function __main() {
    const d = new Director($('#lifegame'), null, {
        fps: 1,
        enablePause: true
    })

    const scene = new LifeGameScene(d)

    d.setScene(scene)
        .run()
})();


})();
