input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0)
    count = 0
})
input.onButtonPressed(Button.B, function () {
    count += 1
    basic.showNumber(count)
    dfplayermini.playFile(count, dfplayermini.isRepeat.No)
    if (count == 6) {
        basic.showString("Fim do trajeto")
        count = 0
        basic.showNumber(count)
    }
})
let count = 0
dfplayermini.connect(SerialPin.P0, SerialPin.P1)
dfplayermini.setVolume(30)
basic.showNumber(0)
count = 0
