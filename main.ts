input.onButtonPressed(Button.A, function () {
    servos.turnServo(servos.ServoPin.P8, 90)
})
input.onButtonPressed(Button.AB, function () {
    servos.turnServo(servos.ServoPin.P8, 0)
})
input.onButtonPressed(Button.B, function () {
    servos.turnServo(servos.ServoPin.P8, -90)
})
servos.resetServos(servos.ServoPin.P8)
servos.motorPinPower(servos.MotorPin.Right, servos.Power.On)
basic.forever(function () {
    light.displayLuminance(light.LightPin.P0)
    if (light.ifLuminance(light.LightPin.P0, light.Luminance.Lit)) {
        servos.turnServo(servos.ServoPin.P8, 90)
    } else if (light.ifLuminance(light.LightPin.P0, light.Luminance.Shaded)) {
        servos.turnServo(servos.ServoPin.P8, 0)
    } else if (light.ifLuminance(light.LightPin.P0, light.Luminance.Dark)) {
        servos.turnServo(servos.ServoPin.P8, -90)
    }
})
