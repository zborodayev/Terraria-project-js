import { Link } from "react-router-dom"
import styles from '../css/App.module.scss'

export const Home = () => {
  return (
    <div className={styles.main}>
        <div>
            <h1 className="text-3xl flex justify-center" >Terraria class guide</h1>
            <h1 className="flex justify-center text-xl m-2" >This is my joint project with <img src="/manukek.jpeg" className="w-10 h-10 rounded-full m-1" /> manukek</h1>
            <Link  className="flex justify-center text-xl mx-2 text-blue-500 hover:underline duration-150 " to={'/class'}>Guide</Link>
        </div>
    </div>
  )
}
