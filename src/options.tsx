import defaultProfile from './assets/img/profile.gif';

const settings = {
  pictureWidth: 100,
  lgPictureWidth: 150,
}

const defaultData = {
  name: 'Patrick Star',
  login: 'patrick',
  html_url: 'https://github.com/bagusNA',
  avatar_url: defaultProfile,
  created_at: '2021-05-25T12:38:17Z',
  email: 'patrickstar@mail.com',
  company: 'Rock Company',
  location: 'Bikini Bottom',
  twitter_username: null,
  public_repos: 7,
  followers: 2,
  following: 7,
  isDefault: true,
  bio: `Fly me to the moon
    Let me play among the stars
    Let me see what spring is like
    On a-Jupiter and Mars
    
    In other words: hold my hand
    In other words: baby, kiss me
  `,
  blog: null,
}

export { settings, defaultData };