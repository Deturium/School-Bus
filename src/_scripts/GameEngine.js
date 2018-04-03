// Little Game Engine

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

//export

export {
    Director,
    Scene,
    Sprite
}
