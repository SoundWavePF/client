import {useState} from 'react';


const SearchBar = ()=>{
    const [input, setInput] = useState<string>('');

    function handleChange({target}: {target: any}): void {
        setInput(()=>{
            console.log(target.value);
            return target.value;
        }) 
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
                <input 
                    className="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search" 
                    onChange={handleChange}
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    )
}

export default SearchBar;
