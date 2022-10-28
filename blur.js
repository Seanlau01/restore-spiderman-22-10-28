const ctx=cs.getContext('2d')
let cs_W=window.innerWidth
let cs_H=window.innerHeight
let r=50
let arcObj={x:Math.random()*(cs_W - 2*r) + r,y:Math.random()*(cs_H - 2*r)+r,r:r,sr:0,er:Math.PI*2}
cs.width=cs_W
cs.height=cs_H
let image=new Image()
image.src='spiderman.jpg'
image.onload=function(){
    showClippedImage()
}
let ML=(image.width - cs_W)/2
let MT=(image.height - cs_H)/2

$('#blur_bx').css('width',cs_W+'px')
$('#blur_bx').css('height',cs_H+'px')
$('#blur_image').css('width',image.width+'px')
$('#blur_image').css('height',image.height+'px')
$('#blur_image').css('left',- ML +'px')//向左移
$('#blur_image').css('top', - MT +'px')

window.onresize=function(){
    cs_W=window.innerWidth
    cs_H=window.innerHeight
    arcObj={x:Math.random()*(cs_W - 2*r) + r,y:Math.random()*(cs_H - 2*r)+r,r:r,sr:0,er:Math.PI*2}
    cs.width=cs_W
    cs.height=cs_H
image=new Image()
image.src='spiderman.jpg'
image.onload=function(){
    showClippedImage()
}
ML=(image.width - cs_W)/2
MT=(image.height - cs_H)/2

$('#blur_bx').css('width',cs_W+'px')
$('#blur_bx').css('height',cs_H+'px')
$('#blur_image').css('width',image.width+'px')
$('#blur_image').css('height',image.height+'px')
$('#blur_image').css('left',- ML +'px')//向左移
$('#blur_image').css('top', - MT +'px')
}


function clipCircle(){
    ctx.arc(arcObj.x,arcObj.y,arcObj.r,arcObj.sr,arcObj.er)
    ctx.clip()
}

function showClippedImage(){
    ctx.clearRect(0,0,cs_W,cs_H)
    ctx.save()
    ctx.beginPath()
    clipCircle()
    ctx.drawImage(image,ML,MT,cs_W,cs_H,0,0,cs_W,cs_H)//向右去找坐标
    ctx.closePath()
    ctx.restore()
}
function show(){
   let timer=setInterval(function(){
        arcObj.r+=10
        if(arcObj.r<Math.sqrt(cs_W*cs_W+cs_H*cs_H)){
            showClippedImage() 
        }else{
            clearInterval(timer)
        }
    },10)
       
}
function reset(){
    arcObj={x:Math.random()*(cs_W - 2*r) + r,y:Math.random()*(cs_H - 2*r)+r,r:r,sr:0,er:Math.PI*2}
    showClippedImage()
}

