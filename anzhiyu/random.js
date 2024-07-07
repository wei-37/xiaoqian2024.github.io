var posts=["2024/07/07/CM大佬/","2024/07/07/hello-world/","2024/07/07/这是一好的博文/","2024/07/07/这是一篇新的文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };