const personal = {
  name: 'Paul Heading',
  email: 'hello@paulh.biz',
  location: 'Camberwell, London',
  github: 'https://github.com/paulheading',
  medium: 'https://blog.paulh.biz',
  link: (content, title = content) => <a href={`${content}`}>{title}</a>,
}

personal.email_link = <a href={`mailto:${personal.email}`}>{personal.email}</a>
personal.github_link = personal.link(personal.github, 'Github')
personal.medium_link = personal.link(personal.medium, 'Medium')

export default personal
