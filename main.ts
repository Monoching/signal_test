function counter () {
    for (let count = 0; count <= 10; count++) {
        if (count == 1) {
            pins.digitalWritePin(DigitalPin.P0, 1)
        } else {
            basic.setLedColors(0x007fff, 0x007fff, 0x007fff)
        }
        basic.showNumber(count)
    }
}
function signal () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        for (let index = 0; index < 4; index++) {
            basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
            basic.pause(100)
            basic.setLedColors(0x007fff, 0x007fff, 0x007fff)
        }
    } else {
        basic.setLedColors(0x007fff, 0x007fff, 0x007fff)
    }
}
let count = 0
basic.forever(function () {
    counter()
})
basic.forever(function () {
	
})
basic.forever(function () {
    signal()
})
