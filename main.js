let delta = 60/frameRate
let container = document.getElementById('imgHolder')
let throwableList = []
function createThrowable(imageNum) {
    throwableProperties = getImage(imageNum)
    let img = throwableProperties.el
    img.style.position = "absolute"
    img.style.top = -throwableProperties.size + "px"
    img.height *= throwableProperties.size/Math.max(img.width,img.height)
    container.append(img)
    let direction = (Math.round(Math.random())*2) - 1 // -1 is left, 1 is right
    let pos = {
        x: (direction > 0 ? -throwableProperties.size - safeArea : window.innerWidth + throwableProperties.size + safeArea),
        y: Math.random() * (window.innerHeight - throwableProperties.size)
    }
    let vel = {
        x: ((Math.random()*10)+3) * direction,
        y: (Math.random() * 10) - 5
    }
    if (throwableProperties.colorable) {
        img.style.filter = `hue-rotate(${Math.random() * 360}deg)`
    }
    img.onload = ()=>{
        throwableList.push({
            el: img,
            dir: direction,
            pos: pos,
            vel: vel,
            rot: 0,
            rotSpd: (Math.random() * 10) - 5,
            directionBased: !!throwableProperties.directionBased
        })
    }
}

function mainLoop() {
    // Filter the images array to remove elements that need to be removed
    throwableList = throwableList.filter(i => {
        // Handle X position
        i.pos.x += i.vel.x * delta
        i.el.style.left = i.pos.x + 'px'

        // Check if it needs to be removed (touching left or right)
        if (( // remove if touching the left or right
            i.dir == 1 && i.pos.x > window.innerWidth
        ) || (
            i.dir == -1 && i.pos.x < -throwableProperties.size
        )) {
            i.el.remove(); // Remove the DOM element
            return false;  // Return false to remove from the array
        }

        // Handle Y position
        i.el.style.top = i.pos.y + 'px'
        i.pos.y += i.vel.y * delta
        i.vel.y += (gravity / 10) * delta
        if (i.pos.y + throwableProperties.size > window.innerHeight) { // Bounce if touching the bottom
            i.vel.y *= -bounce
            i.pos.y = (window.innerHeight-throwableProperties.size) - 10
            i.rotSpd += (i.vel.x / 10)
        }

        // Handle rotation
        i.rot += i.rotSpd * delta
        
        i.el.style.transform = `rotate(${i.rot}deg) ${(i.directionBased ? `scaleX(${i.dir})` : "")}`

        return true; // Return true to keep the element in the array
    });

    // requestAnimationFrame(mainLoop);
    setTimeout(mainLoop, 1000/frameRate);
}
mainLoop()
for (let i = 0; i < 25; i++){
    createThrowable()
}

// setInterval(createImage, 100);