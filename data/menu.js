import AboutIcon from 'icons/about'
import ResumeIcon from 'icons/resume'

function item(title, icon = null) {
  var href = '/'
  if (title != 'Home') href += title.toLowerCase()
  return { title, href, icon }
}

const menu = [item('Home'), item('About', AboutIcon()), item('Resume', ResumeIcon())]

export default menu
