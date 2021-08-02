input.onButtonPressed(Button.A, function () {
    irany = -1
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    irany = 1
})
let elozoX = 0
let elozoY = 0
let irany = 0
let x = 2
let y = 2
irany = 1
let apple = randint(0, 4)
while (apple == x) {
    apple = randint(0, 4)
}
basic.pause(500)
led.plot(apple, 2)
basic.forever(function () {
    led.plot(x, y)
    elozoY = y
    elozoX = x
    basic.pause(1000)
    x += irany
    led.unplot(elozoX, elozoY)
    if (apple == x) {
        game.addScore(1)
        apple = randint(0, 4)
        while (apple == x) {
            apple = randint(0, 4)
        }
        basic.pause(500)
        led.plot(apple, 2)
    }
    if (x == 5 || x == -1) {
        basic.showIcon(IconNames.Sad)
        basic.showNumber(game.score())
    }
})
