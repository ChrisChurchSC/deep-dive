import styles from './ClientLogos.module.css'

export default function ClientLogos({ clients = [], label = 'Trusted by' }) {
  // Duplicate enough times to guarantee seamless loop at any viewport width
  const repeated = [...clients, ...clients, ...clients, ...clients]

  return (
    <section className={styles.section}>
      {label && <p className={styles.label}>{label}</p>}
      <div className={styles.track}>
        <div className={styles.strip}>
          {repeated.map((client, i) => (
            <div key={i} className={styles.item}>
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className={styles.logo}
                  loading="lazy"
                  style={client.scale ? { height: `${32 * client.scale}px` } : undefined}
                />
              ) : (
                <span className={styles.name}>{client.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
