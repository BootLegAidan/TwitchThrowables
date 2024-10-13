const userId = '' // Your twitch user ID
const oauthToken = '' // Your twitch Oauth Token
const redemptionName = 'Throwable' // Replace with the channel point reward for the throwables

/*
    colorable       will add a random color to the object when it is thrown     default is false
    directionBased  will flip the image relative to the velocity                default is false
    stickToBottom   makes the throwable glued to the bottom at all times        default is false
    rotate          makes the image rotate                                      default is true
*/
const imgs = [
    {img:"banana.png"},
    {img:"fireball.png", directionBased: true},
    {img:"bouncyBall.png", colorable: true},
    {img:"mtDew.png", size: 250}
]

let imgSize = 200   // Default size of the images
let gravity = 3     // Gravity of the thrown objects
let safeArea = 10   // Adjust this if the items show up after a delay
let frameRate = 45  // Framerate, may speed up/slow down some physics stuff
let bounce = 0.9    // How bouncy the objects are