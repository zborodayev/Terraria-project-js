import { Link } from "react-router-dom"
import styles from '../css/App.module.scss'

export const Home = () => {
  return (
    <div className={styles.main}>
        <div>
            <h1 className="text-3xl flex justify-center" >Terraria class guide</h1>
            <h1 className="text-2xl flex justify-center mt-3 " >There are <Link  className="mx-2 hover:text-slate-700 duration-150 " to={'/class'}>4 classes</Link> in Terraria</h1>
        </div>
    </div>
  )
}
