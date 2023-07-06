const title = (value) => 'Paul Heading | ' + value + ' | Front End Developer and Designer'

function keywords(value) {
  var basic = 'frontend developer, frontend designer, react, next.js, vue.js, gsap, team treehouse, barbican, london'

  if (value) basic = value + ', ' + basic

  return basic
}

export { title, keywords }

export default {
  home: {
    title: title('Portfolio'),
    keywords: keywords('portfolio'),
    desc: "I'm a Front End Developer and Designer. I work in the Digital Products team at the Barbican (https://barbican.org.uk) and spend my time building/designing better website-based experiences.",
  },
  about: {
    title: title('About'),
    keywords: keywords(),
    desc: "I built this site using Next.js, GSAP for animations, Netlify for form handling and several external api's. I use Trello as my CMS and pull data from Spotify, Hashnode and Github.",
  },
  resume: {
    title: title('Resume'),
    keywords: keywords(),
    desc: "I've been a Developer since 2020 and a Designer for over 10 years. I work in the Digital Products team at the Barbican (https://barbican.org.uk) and spend my time building/designing better website-based experiences.",
  },
  notfound: {
    title: title('404'),
    keywords: keywords(),
    desc: 'Oh no... this page is missing. Maybe the url is incorrect? If something looks broken, please email hello@paulh.biz',
  },
}
