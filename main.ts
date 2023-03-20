input.onButtonPressed(Button.A, function () {
    radio.sendString("hi")
    basic.showIcon(IconNames.Yes)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    RaidGroup = 0
    while (RaidGroup < MaxGroup) {
        RaidGroup = RaidGroup + 1
        radio.setGroup(RaidGroup)
        radio.sendString("HI FROM JASPER")
        if (RaidGroup == MaxGroup) {
            basic.showIcon(IconNames.Yes)
        }
    }
})
let RaidGroup = 0
let MaxGroup = 0
let PrivateGroup = 123
MaxGroup = 1000000000000000000
radio.setGroup(PrivateGroup)
