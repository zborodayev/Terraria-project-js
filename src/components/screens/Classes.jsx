import styles from '../css/App.module.scss'
export const Classes = () => {
  return (
    <div>
        <h1 className="flex mt-3 justify-center text-3xl" >There are 4 classes in Terraria</h1>
        <div className="flex justify-center m-2 " >
            <h1 className={styles.classes} >melee</h1>
            <h1 className={styles.classes} >ranged</h1>
            <h1 className={styles.classes} >magic</h1>
            <h1 className={styles.classes} >summoner</h1>
        </div>
    </div>
  )
}
