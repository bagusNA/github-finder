const getUserData = async (username: string) => {
  return await fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json());
}

const searchUser = async (username: string) => {
  return await fetch(`https://api.github.com/search/users?q=${username}`)
  .then(res => res.json());
}

export { getUserData, searchUser };