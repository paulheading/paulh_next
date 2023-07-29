const job = {
  title: 'Front-end Designer and Developer',
  description: 'I work in the Digital Products team at the Barbican. I spend my time building and designing better website-based experiences.',
}

const title = (value, append = true) => (append ? 'Paul Heading | ' + value + ' | ' + job.title : value)

function keywords(value) {
  var basic = 'front-end developer, front-end designer, react, next.js, vue.js, gsap, team treehouse, barbican, london'

  if (value) basic = value + ', ' + basic

  return basic
}

export default {
  job,
  title,
  keywords,
  home: {
    title: title('Portfolio'),
    keywords: keywords('portfolio'),
    desc: "I'm a " + job.title + '. ' + job.description,
  },
  about: {
    title: title('About'),
    keywords: keywords(),
    desc: `Hey I'm Paul, a Front-end Designer and Developer. I've been a Developer since 2020 and a Designer for over 10 years. I work in the Digital Products team at the Barbican and spend my time building/designing better website-based experiences. Before 2020, I worked as a Designer in the Barbican Design Team.`,
  },
  resume: {
    title: title('Resume'),
    keywords: keywords(),
    desc: "I've been a Developer since 2020 and a Designer for over 10 years. " + job.description,
  },
  notfound: {
    title: title('404'),
    keywords: keywords(),
    desc: 'Oh no... this page is missing. Maybe the url is incorrect? If something looks broken, please email hello@paulh.biz',
  },
}
