const shopSearch = document.getElementById('shopSearch');
const shopCards = document.querySelectorAll('.contain-card');

shopSearch.addEventListener('input', () => {
    const searchQuery = shopSearch.value.toLowerCase();
    shopCards.forEach(card => {
        const shopName = card.querySelector('h2').textContent.toLowerCase();
        card.style.display = shopName.includes(searchQuery) ? 'block' : 'none';
    });
});



// Mobile menu toggle logic

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


        //           // Function to handle likes
        // function handleLikes() {
        //     const card = document.querySelector('.contain-card');
        //     const likeBtn = card.querySelector('.like-btn');
        //     const likeCount = card.querySelector('.like-count');
        //     const postId = card.getAttribute('data-id');

        //     // Initialize likes from localStorage
        //     const likes = JSON.parse(localStorage.getItem('likes')) || {};
        //     const userLikes = JSON.parse(localStorage.getItem('userLikes')) || [];

        //     if (likes[postId]) {
        //         likeCount.textContent = `${likes[postId]} Likes`;
        //         if (userLikes.includes(postId)) {
        //             likeBtn.textContent = 'Liked';
        //             likeBtn.classList.add('liked');
        //         }
        //     }

        //     // Handle click event
        //     likeBtn.addEventListener('click', () => {
        //         if (!userLikes.includes(postId)) {
        //             // Update likes
        //             likes[postId] = (likes[postId] || 0) + 1;
        //             localStorage.setItem('likes', JSON.stringify(likes));
        //             userLikes.push(postId);
        //             localStorage.setItem('userLikes', JSON.stringify(userLikes));

        //             // Update UI
        //             likeCount.textContent = `${likes[postId]} Likes`;
        //             likeBtn.textContent = 'Liked';
        //             likeBtn.classList.add('liked');
        //         } else {
        //             alert('You have already liked this post!');
        //         }
        //     });
        // }

        // // Initialize the like system
        // handleLikes();
        
        
        
        
          
//           document.addEventListener("DOMContentLoaded", () => {
//     const likeButtons = document.querySelectorAll(".like-button");
//     const likeCounts = document.querySelectorAll(".like-count");

//     // Load saved likes from localStorage
//     const savedLikes = JSON.parse(localStorage.getItem("likes")) || {};

//     // Initialize like counts
//     likeCounts.forEach(span => {
//         const id = span.getAttribute("data-id");
//         span.textContent = savedLikes[id] || 0;
//     });

//     // Handle like button clicks
//     likeButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             const id = button.getAttribute("data-id");

//             // Check if user already liked this card
//             const userLikes = JSON.parse(localStorage.getItem("userLikes")) || [];
//             if (userLikes.includes(id)) {
//                 alert("You have already liked this item!");
//                 return;
//             }

//             // Update like count
//             savedLikes[id] = (savedLikes[id] || 0) + 1;
//             localStorage.setItem("likes", JSON.stringify(savedLikes));

//             // Update UI
//             const countSpan = document.querySelector(`.like-count[data-id="${id}"]`);
//             countSpan.textContent = savedLikes[id];

//             // Mark card as liked by this user
//             userLikes.push(id);
//             localStorage.setItem("userLikes", JSON.stringify(userLikes));
//         });
//     });
// });



//document.addEventListener("DOMContentLoaded", function () {
    //const likeButtons = document.querySelectorAll(".like-button");

  //  likeButtons.forEach(button => {
       // const card = button.closest(".contain-card");
     //   const cardId = card.getAttribute("data-id");
   //     const likeCountElement = button.querySelector(".like-count");

        // Load the like count from localStorage
      //  const storedLikes = localStorage.getItem(`like_${cardId}`);
     //   const isLiked = localStorage.getItem(`liked_${cardId}`) === "true";

     //   likeCountElement.textContent = storedLikes || 0;
    //    if (isLiked) button.disabled = true;

    //    button.addEventListener("click", () => {
        //    if (!isLiked) {
       //         const currentLikes = parseInt(likeCountElement.textContent, 10);
       //         const newLikes = currentLikes + 1;

                // Update like count in UI and localStorage
          //      likeCountElement.textContent = newLikes;
          //      localStorage.setItem(`like_${cardId}`, newLikes);
       //         localStorage.setItem(`liked_${cardId}`, "true");

                // Disable the button after liking
      //          button.disabled = true;
   //         }
   //     });
 //   });
//});


document.addEventListener("DOMContentLoaded", function () {
    const likeButtons = document.querySelectorAll(".like-button");

    // Mock server data (In a real-world app, replace this with an API call)
    const serverData = {
        likes: {
            1: 10, // Card 1 has 10 likes
            2: 15, // Card 2 has 15 likes
        },
    };

    likeButtons.forEach(button => {
        const card = button.closest(".contain-card");
        const cardId = card.getAttribute("data-id");
        const likeCountElement = button.querySelector(".like-count");

        // Load the like count from the server (mocked)
        const totalLikes = serverData.likes[cardId] || 0;
        likeCountElement.textContent = totalLikes;

        button.addEventListener("click", () => {
            // Update the like count
            if (!button.disabled) {
                serverData.likes[cardId] = (serverData.likes[cardId] || 0) + 1;

                // Simulate saving to server
                likeCountElement.textContent = serverData.likes[cardId];

                // Disable the button after liking
                button.disabled = true;

                console.log(`Updated likes for card ${cardId}: ${serverData.likes[cardId]}`);
            }
        });
    });
});
