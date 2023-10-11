const API_URL = 'https://jsonplaceholder.typicode.com'

function getPostAndUser(postId) {
  return fetch(`${API_URL}/posts/${postId}`)
  .then(response => response.json())
  .then(data => {
    const userId = data.userId;
    return fetch(`${API_URL}/users/${userId}`)
    .then(response => response.json())
    .then(user => {
      return {
        post: data,
        user: user
      }
    })
  })
}

// getPostAndUser(1).then(result => {
//   console.log(result)
// })
let pageNum = 1;
const posts = [];
function getAllPosts() {
  return fetch(`${API_URL}/posts?_page=${pageNum}`)
    .then(response => response.json())
    .then(page => {
      if (page.length <= 0) {
        return posts;
      } else {
        page.forEach(post => {posts.push(post)});
        pageNum++;
        return getAllPosts();
      }
    })
}

getAllPosts().then(posts => {
  console.log(posts)
})
