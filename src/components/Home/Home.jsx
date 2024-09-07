import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="">
        <div>
            <h1 className="text-3xl flex justify-center" >Terraria class guide</h1>
            <h1 className="text-2xl flex justify-center" >There are <Link  className="mx-1 hover:text-slate-700 duration-150 " to={'/'}>4 classes</Link> in Terraria</h1>
        </div>
    </div>
  )
}
