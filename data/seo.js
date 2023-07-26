const job = {
  title: 'Front-end Designer and Developer',
  description: 'I work in the Digital Products team at the Barbican. I spend my time building and designing better website-based experiences.',
}

function strip_html(value) {
  // split desc at first open paragraph tag
  value = value.split('<p')[1].slice(1)

  // split remaining desc at close paragraph tag
  value = value.split('p>')[0].slice(0, -2)

  // remove anchor tags from desc
  value = value.replace(/<\/?a[^>]*>/g, '')

  return value
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
  strip_html,
  home: {
    title: title('Portfolio'),
    keywords: keywords('portfolio'),
    desc: "I'm a " + job.title + '. ' + job.description,
  },
  about: {
    title: title('About'),
    keywords: keywords(),
    desc: "I built this site using Next.js, GSAP for animations, Netlify for form handling and several external api's. I use Trello as my CMS and pull data from Spotify, Hashnode and Github.",
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
