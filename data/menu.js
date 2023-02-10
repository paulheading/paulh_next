import AboutIcon from 'icons/about'
import ResumeIcon from 'icons/resume'

const item = (title, icon = null) => ({ title, icon })

const menu = [item('Home'), item('About', AboutIcon()), item('Resume', ResumeIcon())]

export default menu
