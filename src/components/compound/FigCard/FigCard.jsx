import styles from './FigCard.module.scss'
export const FigCard = () => {
  return (
    <div className={styles.figCardContainer}>
      <div className={styles.componentThumbnail}></div>
      <div className={styles.cardDetails}>
        <p>Responsive Navigation Bar</p>
        <p>1 Component</p>
      </div>
    </div>
  )
}
