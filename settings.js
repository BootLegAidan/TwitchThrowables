const userId = '' // Your twitch user ID
const oauthToken = '' // Your twitch Oauth Token
const redemptionName = 'Throwable' // Replace with the channel point reward for the throwables

/*
    colorable       will add a random color to the object when it is thrown         default is false
    directionBased  will flip the image relative to the velocity                    default is false
    stickToBottom   makes the throwable glued to the bottom at all times            default is false
    rotate          makes the image rotate                                          default is true
    ceiling         makes the image bounce off a ceiling at the top of the screen   default is false
    gravity         sets the images specific gravity, overrides the default         default is whatever you set defGravity to
*/
const imgs = [
    {img:"banana.png"},
    {img:"fireball.png", directionBased: true},
    {img:"bouncyBall.png", colorable: true},
    {img:"mtDew.png", size: 250}
]

let imgSize = 200   // Default size of the image
let defGravity = 3  // Default gravity of the thrown objects
let safeArea = 10   // Adjust this if the items show up after a delay
let frameRate = 45  // Framerate, may speed up/slow down some physics stuff
let bounce = 0.9    // How bouncy the objects are
let minXV = 3       // The slowest the object will be thrown horizontally
let maxXV = 15      // The fastest the object will be thrown horizontally
let minYV = 3       // The slowest the object will be thrown vertically
let maxYV = 15      // The fastest the object will be thrown vertically