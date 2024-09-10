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
      console.log(`${this.title} has been reserve`);
    }else {
      console.log(`${this.title} can't make a reservation`);
    }
  }

  returnVideo() {
    this.isAvailable = true;
    console.log(`${this.title} has been reserve`);
  }
}

class RentalStore {
  constructor() {
    this.videos = [];
  }

  addVideo(title, price) {
    const newVideo = new Video(this.videos.length + 1, title, price);
    this.videos.push(newVideo);
    console.log(`${title}이 추가되었습니다`);
  }

  displayVideos() {
    this.videos.forEach(video => {
      console.log(`${video.title}: ${video.price} - ${video.isAvailable ? '대여가능' : '대여불가능'}`);
    })
  }

  rentVideo(id) {
    const video = this.videos.find(video => video.id === id);
    if(video) {
      video.rent();
    }else {
      console.log('대여 불가능');
    }
  }

  returnVideo(id) {
    const video = this.videos.find(video => video.id === id);

    if(video) {
      video.returnVideo();
      video.isAvailable = true;
    }else {
      console.log('해당 비디오를 찾을 수 없습니다');
    }
  }
}

const soyunRentalStore = new RentalStore;

soyunRentalStore.addVideo('집가고싶다', '격렬하게 집가고 싶다');
soyunRentalStore.addVideo('집갈래', '집보내줘');
soyunRentalStore.addVideo('naver', 'papage');
soyunRentalStore.addVideo('google', 'google form');

console.log('=== 대여 여부 확인 ===');
soyunRentalStore.displayVideos();
soyunRentalStore.rentVideo(1);

console.log('=== rent후 ===');
soyunRentalStore.displayVideos();

