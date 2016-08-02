var slideshow = {
	photoList: ['banana', 'pulsar', 'hamsting', 'hours', 'house'],
	currentPhotoIndex: 0,
	nextPhoto: function () {
		if (this.currentPhotoIndex >= this.photoList.length - 1){
			console.log('end of slideshow');
		} else {
			this.getCurrentPhoto();
			this.currentPhotoIndex++;
		}
	},
	prevPhoto: function () {
		if (this.currentPhotoIndex < 0) {
			console.log('start of slideshow');
		} else {
			this.getCurrentPhoto();
			this.currentPhotoIndex--;
		}
	},
	getCurrentPhoto: function () {
		console.log(this.photoList[this.currentPhotoIndex]);
	}
}

slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();


slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();

slideshow.nextPhoto();
slideshow.nextPhoto();

