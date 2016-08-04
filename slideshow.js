var slideshow = {
	photoList: ['first', 'second', 'third', 'fourth', 'fifth'],
	currentPhotoIndex: 0,
	nextPhoto: function () {
<<<<<<< HEAD
		if (this.currentPhotoIndex > this.photoList.length - 1){
=======
		this.currentPhotoIndex++;
		if (this.currentPhotoIndex === this.photoList.length ){
>>>>>>> 9fb931c3f550b4e1b10fff0071a3d2ffa59ef607
			console.log('end of slideshow');
			this.currentPhotoIndex--;
		} else {
			this.getCurrentPhoto();
<<<<<<< HEAD
			this.currentPhotoIndex += 1;
=======
>>>>>>> 9fb931c3f550b4e1b10fff0071a3d2ffa59ef607
		}
	},
	prevPhoto: function () {
		this.currentPhotoIndex--;
		if (this.currentPhotoIndex === -1) {
			console.log('start of slideshow');
			this.currentPhotoIndex++;
		} else {
			this.getCurrentPhoto();
<<<<<<< HEAD
			this.currentPhotoIndex -= 1;
=======
>>>>>>> 9fb931c3f550b4e1b10fff0071a3d2ffa59ef607
		}
	},
	getCurrentPhoto: function () {
		console.log(this.photoList[this.currentPhotoIndex] + ': index: ' + this.currentPhotoIndex);
	}
}

<<<<<<< HEAD
slideshow.nextPhoto(); 
=======
slideshow.getCurrentPhoto();

slideshow.nextPhoto();
>>>>>>> 9fb931c3f550b4e1b10fff0071a3d2ffa59ef607
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
