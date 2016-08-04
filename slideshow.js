var slideshow = {
	photoList: ['first', 'second', 'third', 'fourth', 'fifth'],
	currentPhotoIndex: 0,
	getCurrentPhoto: function () {
		console.log(this.photoList[this.currentPhotoIndex]);
	},
	play: function () {
		this.currentPhotoIndex++;
		if (this.currentPhotoIndex === this.photoList.length ){
			console.log('end of slideshow');
			this.currentPhotoIndex--;
		} else {
			this.getCurrentPhoto();
		}
	},
	playInterval: setInterval(this.play, 2000)
	
	pause: null

}

slideshow.play();


