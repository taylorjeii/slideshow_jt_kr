var slideshow = {
	photoList: ['first', 'second', 'third', 'fourth', 'fifth'],
	currentPhotoIndex: 0,
	nextPhoto: function () {
		this.currentPhotoIndex++;
		if (this.currentPhotoIndex === this.photoList.length ){
			console.log('end of slideshow');
			this.currentPhotoIndex--;
		} else {
			this.getCurrentPhoto();
		}
	},
	prevPhoto: function () {
		this.currentPhotoIndex--;
		if (this.currentPhotoIndex === -1) {
			console.log('start of slideshow');
			this.currentPhotoIndex++;
		} else {
			this.getCurrentPhoto();
		}
	},
	getCurrentPhoto: function () {
		console.log(this.photoList[this.currentPhotoIndex]);
	}
}

slideshow.getCurrentPhoto();

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

slideshow.nextPhoto();
slideshow.nextPhoto();
