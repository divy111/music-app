// list of songs
const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "Death Bed",
      artist: "Powfu",
      song: "https://firebasestorage.googleapis.com/v0/b/lyriks-12062.appspot.com/o/songs%2FPowfu-death-bed.mp3?alt=media&token=cb4fb98f-70e0-4dc8-b116-97f9b02c5a9d",
      imgSrc:"https://firebasestorage.googleapis.com/v0/b/lyriks-12062.appspot.com/o/image%2Fdeath%20bed.jpg?alt=media&token=8f788f5f-5ccc-4a18-a2c1-dca064ba0abb",
    },
    {
      id: 2,
      favourite: false,
      songName: "Saari ki Saari 2.0",
      artist: "Darshan Raval",
      song: "https://firebasestorage.googleapis.com/v0/b/lyriks-12062.appspot.com/o/songs%2FSaari-Ki-Saari-Darshan-Raval.mp3?alt=media&token=09467b82-ca26-41f4-a444-3b4ae1b74fc2",
      imgSrc:"https://firebasestorage.googleapis.com/v0/b/lyriks-12062.appspot.com/o/image%2Fdarshan%20r.jpg?alt=media&token=d6987f1e-50a2-4da8-8534-8ad3bc3846c1",
    },
    {
      id: 3,
      favourite: false,
      songName: "Tera Zikr",
      artist: "Darshan Raval",
      song: "https://firebasestorage.googleapis.com/v0/b/lyriks-12062.appspot.com/o/songs%2FTera%20Zikr%20Darshan%20Raval%20320%20Kbps.mp3?alt=media&token=ea76e690-abfa-4be3-ab09-74984e7e3cfd",
      imgSrc:"https://firebasestorage.googleapis.com/v0/b/lyriks-12062.appspot.com/o/image%2Ftera%20zikr.jpg?alt=media&token=12a04351-c4f7-43bb-b821-fd194c92c4c4",
    },
    {
      id: 4,
      favourite: false,
      songName: "Pehli Mohabbat",
      artist: "Darshan Raval",
      song: "https://firebasestorage.googleapis.com/v0/b/lyriks-12062.appspot.com/o/songs%2FPehli-Mohabbat_192(PaglaSongs).mp3?alt=media&token=f7dcc6fd-79f9-48fd-accb-2e7f8f1efd47",
      imgSrc:"https://firebasestorage.googleapis.com/v0/b/lyriks-12062.appspot.com/o/image%2Fdd.jpg?alt=media&token=d6f40ba3-a888-4eb6-9f90-379f305b8fe0",
    }

    
  //     // id: 5,
  //     favourite: false,
  //     songName: "Naanga Vera Maari",
  //     artist: "Yuvan Shankar Raja",
  //     song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fvalimai.mp3?alt=media&token=97c769ab-e2fb-4562-90aa-18c73b320bde",
  //     imgSrc:
  //       // "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fvalimai.jpg?alt=media&token=e11b839d-2514-4e1a-aa3a-20db3540a837",
  //   },
  //   {
  //     id: 6,
  //     songName: "Your Woman",
  //     artist: "White Town",
  //     song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FWhite-Town-Your-Women.mp3?alt=media&token=91817445-98ba-4a99-a4b4-6218f2742eb3",
  //     imgSrc:
  //       "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fwhitetown.jpg?alt=media&token=25e1ec0c-24ec-4a11-a7a7-e55ec1fc50cf",
  //   },
  //   {
  //     id: 7,
  //     favourite: false,
  //     songName: "Charlie",
  //     artist: "Gopi Sundar",
  //     song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FCharlie.mp3?alt=media&token=5a129114-bb31-4a5a-95b7-1767829df21e",
  //     imgSrc:
  //       "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fcharlie.jpg?alt=media&token=81a1dc08-a9af-4db2-b74d-1f50315f9342",
  //   },
  //   {
  //     id: 8,
  //     favourite: false,
  //     songName: "Mask Off",
  //     artist: "Future",
  //     song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FFuture-Mask-Off.mp3?alt=media&token=92d8b60f-2bca-406f-914a-40bfb9a9324a",
  //     imgSrc:
  //       "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fmask.jpg?alt=media&token=22f0d7be-74b8-4c0d-849d-b777370e9559",
  //   },
  //   {
  //     id: 9,
  //     favourite: false,
  //     songName: "Hey Mama",
  //     artist: "David Guetta",
  //     song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FHeyMamaRingtone.mp3?alt=media&token=850148f5-8a15-4f87-995d-711138d5d7a0",
  //     imgSrc:
  //       "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fheymama.jpg?alt=media&token=2d8e8632-8051-4105-9760-3c715d797802",
  //   },
  //   {
  //     id: 10,
  //     favourite: false,
  //     songName: "Turkish Folk Battle Song",
  //     artist: "CVR Toon ",
  //     song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FPlevne-turkish.mp3?alt=media&token=72f7e03b-2865-4ffb-a2d1-da4c4557fb80",
  //     imgSrc:
  //       "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fturkish.jpg?alt=media&token=1f44ad17-43a8-4e1d-b232-a78b28cb9fe0",
  //   },
    ];
  
   export { Songs };