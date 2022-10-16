export {};

declare global {
  interface Window {
    onSpotifyWebPlaybackSDKReady: undefined | string | number | function | boolean | object;
    Spotify: undefined | string | number | function | boolean | object
  }
}