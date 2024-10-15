imgs.forEach(i => {
    let img = new Image()
    img.src = "./images/"+i.img
    document.getElementById("imgLoader").append(img)
})
function getImage(imageNum) {
    if (imageNum == undefined || imageNum >= imgs.length) {
        imageNum = Math.floor(imgs.length*Math.random())
    }
    let imgProps = imgs[imageNum]
    let image = new Image()
    image.src = "./images/"+imgs[imageNum].img+""
    let returnVal =  {
        el: image, 
        colorable: imgProps.colorable, 
        directionBased: imgProps.directionBased,
        size: (imgProps.size || imgSize),
        bottom: imgProps.stickToBottom,
        rotate: (imgProps.rotate !== undefined && imgProps.rotate === false) ? false : true,
        ceiling: imgProps.ceiling,
        gravity: (imgProps.gravity == undefined ? defGravity : imgProps.gravity)
    }
    return returnVal
}