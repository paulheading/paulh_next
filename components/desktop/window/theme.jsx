import styles from 'styles/components/desktop/window/theme.module.scss'
import Window from 'components/desktop/window'
import GraphIcon from 'icons/graph'

function ThemeWindow({ name, folders, data, color, style }) {
  const { downloads, version } = data
  const customStyle = styles[data.name]

  const graphProps = {
    className: styles.graph,
    color,
  }

  const windowProps = {
    name,
    folders,
    style,
  }

  const nameProps = {
    className: styles.name,
    href: data.url,
  }

  return (
    <Window {...windowProps}>
      <div className={styles.window + ' ' + customStyle}>
        <div className={styles.copy}>
          <div>
            <div>
              <a {...nameProps}>{data.name}</a>
            </div>
            <div>{downloads}</div>
          </div>
          <div className={styles.version + ' ' + customStyle}>{version}</div>
        </div>
        <GraphIcon {...graphProps} />
      </div>
    </Window>
  )
}

export default ThemeWindow
