var posts=["2024/07/07/这是一篇新的文章/","2024/07/07/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };