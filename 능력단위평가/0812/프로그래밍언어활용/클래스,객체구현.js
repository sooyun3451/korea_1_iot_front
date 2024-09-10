class Video {
  constructor(id, title, price) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.isAvailable = true;
  }

  rent() {
    if(this.isAvailable) {
      this.isAvailable = false;
      console.log(`${this.title} Can be rented`);
    }else {
      console.log(`${this.title} Can't be rented out`);
    }
  }

  returnVideo() {
    this.isAvailable = true;
    console.log(`${this.title} Can be rented`);
  }
}

class RentalStore {
  constructor() {
    this.videos = [];
  }

  addVideo(title, price) {
    const newVideo = new Video(this.videos.length + 1, title, price);
    this.videos.push(newVideo);
    console.log(`${title}It's been added`);
  }

  displayVideos() {
    this.videos.forEach(video => {
      console.log(`${video.title}: ${video.price} - ${video.isAvailable ? 'Can be rented' : 'Cant be rented out'}`);
    })
  }

  rentVideo(id) {
    const video = this.videos.find(video => video.id === id);
    if(video) {
      video.rent();
    }else {
      console.log('Cant be rented out');
    }
  }

  returnVideo(id) {
    const video = this.videos.find(video => video.id === id);

    if(video) {
      video.returnVideo();
      video.isAvailable = true;
    }else {
      console.log('No video found');
    }
  }
}

const soyunRentalStore = new RentalStore;

soyunRentalStore.addVideo('I want to go home', 'I want to go home intensely');
soyunRentalStore.addVideo('I want to go home', 'Let me go home');
soyunRentalStore.addVideo('naver', 'papage');
soyunRentalStore.addVideo('google', 'google form');

console.log('=== Check if its rented or not ===');
soyunRentalStore.displayVideos();
soyunRentalStore.rentVideo(1);

console.log('=== After renting ===');
soyunRentalStore.displayVideos();

