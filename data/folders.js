const folder = (name = '', position, open = false) => ({ name, position, open })

const position = (a, b, c, d) => [
  {
    right: a,
    top: b,
  },
  {
    right: c,
    top: d,
  },
]

const folders = [
  folder('trello', position(10, 20, 20, 40), true),
  folder('barbican reset', position(100, 100, 30, 170), true),
  folder('spotify 2022', position(200, 40, 140, 90), true),
  folder('futuro', position(190, 210, 240, 130)),
  folder('spotify 2021', position(280, 160, 330, 90)),
  folder('spotify 2020', position(30, 240, 180, 250)),
]

export default folders
