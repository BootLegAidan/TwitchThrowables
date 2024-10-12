imgs.forEach(i => {
    let img = new Image()
    img.src = "./images/"+i.img
    document.getElementById("imgLoader").append(img)
})
function getImage(imageNum) {
    if (imageNum == undefined || imageNum >= imgs.length) {
        imageNum = Math.floor(imgs.length*Math.random())
    }
    let image = new Image()
    image.src = "./images/"+imgs[imageNum].img+""
    let returnVal =  {
        el: image, 
        colorable: imgs[imageNum].colorable, 
        directionBased: imgs[imageNum].directionBased,
        size: (imgs[imageNum].size || imgSize)
    }
    return returnVal
}