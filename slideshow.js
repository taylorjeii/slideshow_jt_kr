var slideshow = {
	photoList: ['banana', 'pulsar', 'hamsting', 'hours', 'house'],
	currentPhotoIndex: 0,
	nextPhoto: function () {
		this.currentPhotoIndex++;
		if (this.currentPhotoIndex >= this.photoList.length ){
			console.log('end of slideshow');
		} else {
			this.getCurrentPhoto();
		}
	},
	prevPhoto: function () {
		this.currentPhotoIndex--;
		if (this.currentPhotoIndex < 0) {
			console.log('start of slideshow');
		} else {
			this.getCurrentPhoto();
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
