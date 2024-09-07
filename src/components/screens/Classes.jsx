import { Link } from 'react-router-dom'
import styles from '../css/App.module.scss'
export const Classes = () => {
  return (
    <div>
        <h1 className="flex mt-3 justify-center text-3xl" >There are 4 classes in Terraria</h1>
        <div className="flex justify-center m-2 " >
            <h1 className={styles.classes}><Link className={styles.class} >melee</Link>, <Link className={styles.class} >ranged</Link>, <Link className={styles.class} >magic</Link> and <Link className={styles.class} >summoner</Link></h1>
        </div>
    </div>
  )
}
