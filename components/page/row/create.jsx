import PageRow from 'components/page/row'
import parse from 'html-react-parser'
import ReactMarkdown from 'react-markdown'

function CreatePageRows(props) {
  const { h3, content, markdown } = props
  const sections = content.split(h3)

  function SectionRow(section, index) {
    if (section == '') return

    if (index > 0) section = h3 + section

    return <PageRow key={'section' + index}>{!markdown ? parse(section) : <ReactMarkdown>{section}</ReactMarkdown>}</PageRow>
  }

  return sections.map(SectionRow)
}

export default CreatePageRows
