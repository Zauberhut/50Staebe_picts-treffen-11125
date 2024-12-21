input.onButtonPressed(Button.A, function () {
    if (programm == 0) {
    	
    } else if (programm == 1) {
        Stab_füllen()
    } else if (programm == 2) {
    	
    } else if (programm == 3) {
    	
    } else if (programm == 4) {
    	
    } else if (programm == 5) {
    	
    } else if (programm == 6) {
    	
    } else if (programm == 7) {
    	
    } else if (programm == 8) {
    	
    } else {
    	
    }
})
function würfeln () {
    Würfel = randint(1, 6)
    if (Würfel == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (Würfel == 2) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    } else if (Würfel == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
    } else if (Würfel == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (Würfel == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else if (Würfel == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    }
}
input.onGesture(Gesture.Shake, function () {
    if (programm == 0) {
    	
    } else if (programm == 1) {
        würfeln()
    } else if (programm == 2) {
    	
    } else if (programm == 3) {
    	
    } else if (programm == 4) {
    	
    } else if (programm == 5) {
    	
    } else if (programm == 6) {
    	
    } else if (programm == 7) {
    	
    } else if (programm == 8) {
    	
    } else {
    	
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "1") {
        programm = 1
        Würfel = 3
        Anzahl_Pixel = 3
    } else if (receivedString == "2") {
        programm = 2
    } else if (receivedString == "3") {
        programm = 3
    } else if (receivedString == "4") {
        programm = 4
    } else if (receivedString == "5") {
        programm = 5
    } else if (receivedString == "6") {
        programm = 6
    } else if (receivedString == "7") {
        programm = 7
    } else if (receivedString == "8") {
        programm = 8
    } else if (receivedString == "9") {
        programm = 9
    } else if (("" as any) == ("0" as any)) {
        programm = 0
    } else if (receivedString == "A") {
        programm = 10
    } else if (receivedString == "B") {
        programm = 11
    } else if (receivedString == "C") {
        programm = 12
    } else if (receivedString == "D") {
        programm = 13
    } else if (receivedString == "*") {
        programm = 14
    } else if (receivedString == "#") {
        programm = 15
    } else {
    	
    }
})
function Stab_füllen () {
    strip.setPixelColorRange(0, informatiktheater.colors(NeoPixelColors.White), Anzahl_Pixel)
    strip.setPixelColorRange(Anzahl_Pixel, informatiktheater.colors(NeoPixelColors.Green), Würfel)
    strip.show()
    Anzahl_Pixel += Würfel
    for (let index = 0; index < Würfel; index++) {
        basic.showIcon(IconNames.No)
    }
    basic.showIcon(IconNames.Yes)
    if (Anzahl_Pixel >= 60) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
    }
    basic.clearScreen()
    Würfel = 0
}
let Anzahl_Pixel = 0
let Würfel = 0
let programm = 0
let strip: informatiktheater.Strip = null
strip = informatiktheater.create(HiwonderPins.P2, 60, PowerSource.Intern)
strip.setBrightness(150)
radio.setGroup(1)
programm = 1
basic.forever(function () {
    if (programm == 0) {
        strip.showColor(informatiktheater.rgb(50, 0, 0))
    } else if (programm == 1) {
    	
    } else if (programm == 2) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
