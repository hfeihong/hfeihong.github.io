const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "年少有为",
        artist: '李荣浩',
        url: 'http://m10.music.126.net/20190903193705/e92dd638684797e34a16fe94f2ddff9e/ymusic/555c/055f/035a/b6da3ffc8d2561b321284004c81da136.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/84.jpg',
      },
      {
        name: '我曾',
        artist: '隔壁老樊',
        url: 'http://m10.music.126.net/20190903193944/c78b44564436febe35e929d4869f915c/ymusic/525d/540b/510f/e7403c0f89ca574eea7dfea2ac7601f5.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      },
      {
        name: '关于孤独我想说的话',
        artist: '隔壁老樊',
        url: 'http://m10.music.126.net/20190903194104/0f3e5570a45de98c7e434bad1f76a43c/ymusic/030e/010f/005c/4d4d12c78b6ecaebd51b7694045e93ed.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      },
      {
        name: '接下来如何',
        artist: 'Hello Nico',
        url: 'http://m10.music.126.net/20190903194252/a0e72da9bbbb056d37b5321c5756fdad/ymusic/97b0/5a0b/468a/4c176c0bd752b6a8d822039243305771.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      },
      {
        name: '起风了',
        artist: '买辣椒也用券',
        url: 'http://m10.music.126.net/20190903194331/c8ff95a9de3ff0ee1de46c2d927017a2/ymusic/0758/550f/545f/028d3b9421be8425d60dc57735cf6ebc.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});