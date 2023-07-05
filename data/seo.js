const title = (value) => 'Paul Heading | ' + value + ' | Full Stack Designer'

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
    desc: "I'm a Full Stack Designer. I design and build with the React.js and Vue.js frameworks. I currently work for the Barbican in London and have just over 1 years experience.",
  },
  about: {
    title: title('About'),
    keywords: keywords(),
    desc: "I built this site using Next.js, GSAP for animations, Netlify for form handling and several external api's. I use Trello as my CMS and pull data from Spotify, Hashnode and Github.",
  },
  resume: {
    title: title('Resume'),
    keywords: keywords(),
    desc: "I've been a designer for the last 10 years, becoming a front-end designer in the last year. My title 'Full Stack Designer', reflects my focus on user experience and animation. I currently work for the Barbican in London, as well as on freelance projects such as https://36bournestreet.com. Last year, I completed my Full Stack Techdegree, with https://teamtreehouse.com",
  },
  notfound: {
    title: title('404'),
    keywords: keywords(),
    desc: 'Oh no... this page is missing. Maybe the url is incorrect? If something looks broken, please email hello@paulh.biz',
  },
}
