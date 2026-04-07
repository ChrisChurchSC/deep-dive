import { useRef, useState } from 'react'
import styles from './ReelPlayer.module.css'

// src: path or URL to a single hero video
// e.g. src="/videos/hero.mp4"
export default function ReelPlayer({ src }) {
  const videoRef = useRef(null)

  return (
    <div className={styles.player}>
      {src ? (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={styles.video}
        />
      ) : (
        <div className={styles.empty} />
      )}
    </div>
  )
}
