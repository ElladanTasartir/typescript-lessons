interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocols {
  playToggle(): void;
  stop(): void;
  iniciarEventos(): void;
}

export default class VideoPlayer implements VideoPlayerProtocols {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerelements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerelements.videoPlayer;
    this.playButton = videoPlayerelements.playButton;
    this.stopButton = videoPlayerelements.stopButton;
    this.iniciarEventos();
  }

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = 'Pause';
    } else {
      this.videoPlayer.pause();
      this.playButton.innerText = 'Play';
    }
  }
  stop(): void {
    this.videoPlayer.pause();
    // Volta o vídeo para o 0
    this.videoPlayer.currentTime = 0;
    this.playButton.innerText = 'Play';
  }
  iniciarEventos(): void {
    // Para que o this seja a classe
    this.playButton.addEventListener('click', () => {
      this.playToggle();
    });
    this.stopButton.addEventListener('click', () => {
      this.stop();
    });
  }
}
/* eslint-disable */
const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
});
