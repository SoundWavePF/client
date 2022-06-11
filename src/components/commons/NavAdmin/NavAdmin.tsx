import style from './NavAdmin.module.css'

const NavAdmin = ()=>{

    return (
        <div className={style.navbar}>
          <div>
            <input type="text" />
          </div>
          <div>
            <label className="textOpcionbar" >Sort by number of songs:</label>
            <select className="select_qw73" name="filter" >
              <option  value="select"></option>
              <option value="Ascendent">Ascendent</option>
              <option value="Descendent">Descendent</option>
            </select>
          </div>
          <div>
            <label className="textOpcionbar" >Sort by Username:</label>
            <select className="select_qw73" name="filter" >
              <option  value="select"></option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
          </div>
        </div>
    )
}

export default NavAdmin;