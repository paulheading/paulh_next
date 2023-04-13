import styles from 'styles/components/desktop.module.scss'
import Canvas from 'components/desktop/canvas'
// import Wifi from 'icons/wifi'
// import { useEffect, useState, useRef } from 'react'
// import { wifi, clock } from 'scripts/animation'

// function getTime() {
//   return new Date().toLocaleString('en-GB', {
//     timeZone: 'Europe/London',
//     timeStyle: 'short',
//   })
// }

// function Topbar({ count }) {
//   const [time, setTime] = useState('1234')
//   const wifi_ref = useRef(null)
//   const dots_ref = useRef(null)

//   useEffect(() => {
//     if (!wifi_ref) return
//     const { current } = wifi_ref
//     const { search } = wifi
//     search(current)
//     setTime(getTime())
//   }, [count])

//   useEffect(() => {
//     if (!dots_ref) return
//     const { current } = dots_ref
//     const { blink } = clock
//     blink(current)
//   }, [])

//   return (
//     <div className={styles.topbar}>
//       <div className={styles.topbar_display}>
//         <div className={styles.topbar_icon}>London</div>
//         <div className={styles.topbar_icon}>
//           <Wifi ref={wifi_ref} />
//         </div>
//         <div className={styles.topbar_icon}>
//           {time.slice(0, 2)}
//           <span ref={dots_ref}>:</span>
//           {time.slice(-2)}
//         </div>
//       </div>
//     </div>
//   )
// }

function Desktop(props) {
  return (
    <div className={styles.desktop}>
      {/* <Topbar {...props} /> */}
      <Canvas {...props} />
    </div>
  )
}

export default Desktop
