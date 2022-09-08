let x = 0
let y = 0
basic.forever(function () {
    x = randint(0, 5)
    for (let index = 0; index <= 4; index++) {
        led.plot(x, index)
        basic.pause(100)
        led.unplot(x, index)
    }
})
basic.forever(function () {
    y = randint(0, 5)
    for (let index = 0; index <= 4; index++) {
        led.plot(y, index + 1)
        basic.pause(100)
        led.unplot(y, index + 1)
    }
})
