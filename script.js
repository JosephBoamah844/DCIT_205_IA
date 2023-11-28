document.addEventListener('DOMContentLoaded', function () {
    const toggleNavBtn = document.getElementById('toggleNavBtn');
    const mainNav = document.getElementById('mainNav');

    toggleNavBtn.addEventListener('click', function () {
        mainNav.classList.toggle('hide-on-mobile');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contentContainer = document.getElementById("content");
    let page = 1;
    const perPage = 5; 
  
    
    function loadMoreContent() {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${perPage}`, true);
  
      xhr.onload = function () {
        if (xhr.status == 200) {
          const posts = JSON.parse(xhr.responseText);
          displayContent(posts);
          page++;
        }
      };
  
      xhr.send();
    }
  
    
    function displayContent(posts) {
      posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
        contentContainer.appendChild(postElement);
      });
    }
  
    
    function isBottomOfPage() {
      return window.innerHeight + window.scrollY >= document.body.offsetHeight;
    }
  
    
    function handleScroll() {
      if (isBottomOfPage()) {
        loadMoreContent();
      }
    }
  
    
    window.addEventListener("scroll", handleScroll);
  
    
    loadMoreContent();
  });

  
  document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("autoplayVideo");

    
    var promise = video.play();

    
    if (promise !== undefined) {
        promise.then(_ => {
            
            console.log("Autoplay started");
        }).catch(error => {
            
            console.error("Autoplay prevented:", error);

           
            document.addEventListener("click", function() {
                video.play();
            });
        });
    }
});