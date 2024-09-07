import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { ErrorNotFound } from "../../assets/Errors/ErrorNotFound"
import { Classes } from "../screens/ClassesMain"
import {MeleeMain} from '../screens/Class/Melee/MeleeMain'
import {Magic} from '../screens/Class/Magic/Magic'
import {Ranged} from '../screens/Class/Ranged/Ranged'
import {Summoner} from '../screens/Class/Summoner/Summoner'
import {Starfury} from '../screens/Class/Melee/MeleeWeapons/Starfury'
import { BladeOfGrass } from "../screens/Class/Melee/MeleeWeapons/BladeOfGrass"
import { PlatinumArmor } from "../screens/Class/Melee/MeleArmor/PlatinumArmor"

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path="/" />
            <Route element={<ErrorNotFound/>} path="*" />
            <Route element={<Classes/>} path="/class" />

            {/* clases */}
            <Route element={<MeleeMain/>} path="/melee"/>
            <Route element={<Magic/>} path="/magic"/>
            <Route element={<Ranged/>} path="/ranged"/>
            <Route element={<Summoner/>} path="/summoner"/>

            {/* meleeWeapons */}
            <Route element={<Starfury/>} path="/meleWeapons/starfury"/>
            <Route element={<BladeOfGrass/>} path="/meleWeapons/bladeofgrass"/>
            <Route element={<PlatinumArmor/>} path="/meleArmor/platinumArmor"/>
            
        </Routes>
    </BrowserRouter>
  )
}
