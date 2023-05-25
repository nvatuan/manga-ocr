import { Canvas } from './Canvas';



export class OverlayCanvas extends Canvas {
    constructor(receivedCanvas, receivedContext) {
        super(receivedCanvas, receivedContext)
    }

    async displayImage(imageFile) {
        let imageObj = new Image();
        imageObj.src = imageFile;
        await imageObj.decode()
        this.resizeCanvas(imageObj.width, imageObj.height)
        this.mainContext.drawImage(imageObj, 0, 0, this.mainCanvas.width, this.mainCanvas.height);
    }


    fillWithWhiteColor(pointX,pointY,cropWidth,cropHeight) {
        this.mainContext.clearRect(pointX,pointY,cropWidth,cropHeight);
        this.mainContext.fillStyle = "white";
        this.mainContext.fillRect(pointX, pointY, cropWidth, cropHeight);
    }

    async fillWithText(x, y, width, height, imageFile) {
        let imageObj = new Image();
        imageObj.src = imageFile;
        await imageObj.decode()
        this.mainContext.drawImage(imageObj, x, y, width, height);
    }

}