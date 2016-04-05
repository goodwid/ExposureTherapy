function Image(fileName) {
    this.path = '../images/' + fileName;
}

var image1a = new Image('1a.png');
console.log(image1a);
