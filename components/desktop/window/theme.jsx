import styles from 'styles/components/desktop/window/theme.module.scss'
import Window from 'components/desktop/window'
import GraphIcon from 'icons/graph'

function ThemeWindow({ name, folders, data, color, style }) {
  const { downloads, version } = data

  const innerProps = {
    style: { borderColor: color },
    className: styles.window,
  }

  const graphProps = {
    className: styles.graph,
    color,
  }

  const windowProps = {
    name,
    folders,
    style,
  }

  return (
    <Window {...windowProps}>
      <div {...innerProps}>
        <div className={styles.copy}>
          <div>
            <div>{data.name}</div>
            <div>{downloads}</div>
          </div>
          <div style={{ color }}>{version}</div>
        </div>
        <GraphIcon {...graphProps} />
      </div>
    </Window>
  )
}

export default ThemeWindow
