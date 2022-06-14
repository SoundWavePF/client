import { useState } from 'react'
import style from './NavAdmin.module.css'

const NavAdmin = ({option}:any)=>{
  const [search, setSearch] = useState('')
  const searchUser = (e:any)=>{
    e.preventDefault()
    // aqui action de busqueda de usuario
    setSearch(e.target.value)
  }
  const sortBy = (e:any)=>{
    if(e.target.value==='A-Z') return true // en ves de null va la action de sort
    if(e.target.value==='Z-A') return true // en ves de null va la action de sort
    if(e.target.value==='Ascendent') return true // en ves de null va la action de sort
    if(e.target.value==='Descendent') return true // en ves de null va la action de sort
  }
  console.log(option)
  if(option){
    return (
      <div className={style.navbar}>
        <div className={style.divOption}>
          <b className={style.b}>SoundWave's Admin Panel</b>
        </div>
      </div>
      )
  } else{
    return (
        <div className={style.navbar}>
          <div className={style.divOption}>
            <b className={style.b}>SoundWave's Admin Panel</b>
          </div>
          <div className={style.divOption}>
            <div >
              <input value={search} placeholder='Put user...' onChange={searchUser} type="text" />
            </div>
            <div>
              <label className="textOpcionbar" >Sort by number of songs:</label>
              <select onSelect={sortBy} className="select_qw73" name="filter" >
                <option  value="select"></option>
                <option value="Ascendent">Ascendent</option>
                <option value="Descendent">Descendent</option>
              </select>
            </div>
            <div>
              <label className="textOpcionbar" >Sort by Username:</label>
              <select onSelect={sortBy} className="select_qw73" name="filter" >
                <option  value="select"></option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
              </select>
            </div>
          </div>
        </div>
    )

  }
}

export default NavAdmin;