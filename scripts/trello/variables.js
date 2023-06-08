const id = {
  user: process.env.NEXT_PUBLIC_TRELLO_ID_USER,
  board: process.env.NEXT_PUBLIC_TRELLO_ID_BOARD,
}

const list = {
  pages: process.env.NEXT_PUBLIC_TRELLO_LIST_PAGES,
  hero: process.env.NEXT_PUBLIC_TRELLO_LIST_HERO,
  projects: process.env.NEXT_PUBLIC_TRELLO_LIST_PROJECTS,
  roles: process.env.NEXT_PUBLIC_TRELLO_LIST_ROLES,
  education: process.env.NEXT_PUBLIC_TRELLO_LIST_EDUCATION,
}

const api = {
  key: process.env.NEXT_PUBLIC_TRELLO_API_KEY,
  base: 'https://api.trello.com/1/',
}

const user = {
  token: process.env.NEXT_PUBLIC_TRELLO_USER_TOKEN,
}

const string = {
  cards: (target) => 'list/' + target + '/cards/',
  attachments: (target) => 'cards/' + target + '/attachments',
  actions: (target) => 'cards/' + target + '/actions',
  url: (target) => api.base + target + '?key=' + api.key + '&token=' + user.token,
}

export { string, id, list, api, user }
