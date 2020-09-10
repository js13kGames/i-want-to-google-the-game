'use strict'
/// <reference path="natlib.d.ts" />

/** A static vertex. */
class NStaticVertex extends NVertex {
    x: number
    y: number

    /** Create a new static vertex. */
    constructor(parent: NBody, x: number, y: number) {
        super(parent, x, y)

        this.x = x
        this.y = y
    }

    /** Set the `x` and `y` components of this vertex. */
    set(x: number, y: number) {
        this.x = x
        this.y = y
    }

    /** Verlet integration override. */
    integrate() {
        this.position.set(this.x, this.y)
        this.oldPosition.set(this.x, this.y)
    }
}
