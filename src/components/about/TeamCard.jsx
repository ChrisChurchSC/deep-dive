import styles from './TeamCard.module.css'

export default function TeamCard({ name, role, bio, photo, credentials = [] }) {
  return (
    <div className={styles.card}>
      <div className={styles.photo}>
        {photo ? (
          <img src={photo} alt={name} className={styles.img} />
        ) : (
          <div className={styles.initials}>
            {name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.name}>{name}</div>
        <div className={styles.role}>{role}</div>
        {bio && <p className={styles.bio}>{bio}</p>}
        {credentials.length > 0 && (
          <div className={styles.creds}>
            {credentials.map(c => (
              <span key={c} className={styles.cred}>{c}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
