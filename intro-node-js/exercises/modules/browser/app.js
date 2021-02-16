
const showPostsForCurrentUser = (userId, cb) => {
  window.App.getPostsForUser(userId, posts => {
    const postTemplates = posts.map(post => {
      return `
      <div class="post">
        ${post.title}
        ${post.body}
        ${post.createdBy}
      </div>`
    })
    cb(postTemplates)
  })
}

showUserProfile = (userId, cb) => {
  window.App.getUserById(userId, user => {
    const profile = `
      <div>
        ${user.name}
      </div>
    `
    cb(user)
  })
}


