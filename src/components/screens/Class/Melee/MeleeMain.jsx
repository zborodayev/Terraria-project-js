import { Link } from "react-router-dom"
import styles from '../../../css/App.module.scss'

export const MeleeMain = () => {
  return (
    <div className={styles.mainMelee}>
      <h1>
      <a className="font-bold">The melee class</a> is powerful, sporting high defense and damage as well as decent crowd control. 
        It utilizes weapons such as swords, spears, sickles, boomerangs, flails, and yoyos. 
        Many melee weapons have a short attack range, and those that are viable at a distance tend to do lower damage than their close-range counterparts. 
        Melee users are good at taking lots of hits without losing lots of health, which helps with tougher enemies and Bosses. 
        Melee is generally the most straight-forward class, 
        as using the weapons and dealing decent damage with them doesnt require any help.
      </h1>
      <div className="flex justify-start" >
        <Link to={'/meleeArmor'}><img className="mt-3 mr-3" src='https://terraria.wiki.gg/images/f/f9/Solar_Flare_armor.png'/></Link>
        <Link to={'/meleeWeapons'}><img className="mt-1" src={'https://terraria.wiki.gg/images/6/66/Zenith.png'}/></Link>
      </div>
    </div>
  )
}
