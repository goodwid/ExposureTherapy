//Image object constructor
function Image(fileName) {
    this.path = 'images/' + fileName;
}

//Build all image objects
var panicImage1 = new Image('panic/puppies.jpg');
var panicImage2 = new Image('panic/kittens.jpg');
var panicImage3 = new Image('panic/landscape.jpg');

var image1a = new Image('spiders/1a.png');
var image1b = new Image('spiders/1b.png');
var image1c = new Image('spiders/1c.png');

var image2a = new Image('spiders/2a.png');
var image2b = new Image('spiders/2b.png');
var image2c = new Image('spiders/2c.png');

var image3a = new Image('spiders/3a.png');
var image3b = new Image('spiders/3b.png');
var image3c = new Image('spiders/3c.png');

var image4a = new Image('spiders/4a.jpg');
var image4b = new Image('spiders/4b.jpg');
var image4c = new Image('spiders/4c.jpg');

var image5a = new Image('spiders/5a.gif');
var image5b = new Image('spiders/5b.gif');
var image5c = new Image('spiders/5c.gif');

var image6a = new Image('spiders/6a.jpg');
var image6b = new Image('spiders/6b.jpg');
var image6c = new Image('spiders/6c.jpg');

var image7a = new Image('spiders/7a.jpg');
var image7b = new Image('spiders/7b.jpg');
var image7c = new Image('spiders/7c.jpg');

var image8a = new Image('spiders/8a.gif');
var image8b = new Image('spiders/8b.gif');
var image8c = new Image('spiders/8c.gif');

var image9a = new Image('spiders/9a.jpg');
var image9b = new Image('spiders/9b.png');
var image9c = new Image('spiders/9c.jpg');

var image10a = new Image('spiders/10a.png');
var image10b = new Image('spiders/10b.png');
var image10c = new Image('spiders/10c.png');

var image11a = new Image('spiders/11a.png');
var image11b = new Image('spiders/11b.png');
var image11c = new Image('spiders/11c.png');

//Array of images
var imageArray = [
    [panicImage1, panicImage2, panicImage3],
    [image1a, image1b, image1c],
    [image2a, image2b, image2c],
    [image3a, image3b, image3c],
    [image4a, image4b, image4c],
    [image5a, image5b, image5c],
    [image6a, image6b, image6c],
    [image7a, image7b, image7c],
    [image8a, image8b, image8c],
    [image9a, image9b, image9c],
    [image10a, image10b, image10c],
    [image11a, image11b, image11c]
];
