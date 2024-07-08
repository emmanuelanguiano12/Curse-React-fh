import { useLocation, useNavigate } from "react-router"
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm"
import { HeroeCard } from "../components/HeroeCard"
import { getHeroesByName } from "../helpers/getHeroesByName"

export const SearchHeroe = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const {q = ''} = queryString.parse(location.search) //separar los querys del path

  const heroes = getHeroesByName(q)

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && (heroes.length === 0)

  const {searchText, onInputChange} = useForm({
    searchText : q //mantener el estado del searchText para que no se borre el input
  })

  const onSubmit = (e) => {
    e.preventDefault()
    // if(searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`)

  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSubmit}>
            <input type="text" 
              placeholder="Search a hero" 
              className="form-control" 
              name="searchText" 
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}  
            />
            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            // (q === '')
            // ? <div className="alert alert-primary">
            //   Search a Hero
            //   </div>
            // : (heroes.length === 0) && <div className="alert alert-danger">
            //   <b>No hero founded with parameter: <b>{q}</b></b>
            //   </div>
          }
          
          <div className="alert alert-primary animate__animated animate__fadeIn" style={{display: showSearch ? '' : 'none'}}>
            Search a Hero
          </div>
          
          <div className="alert alert-danger animate__animated animate__fadeIn" style={{display: showError ? '' : 'none'}}>
            <b>No hero founded with parameter: <b>{q}</b></b>
          </div>

          {
            heroes.map(hero => (
              <HeroeCard key={hero.id} {...hero} />
            ))
          }

        </div>

      </div>

    </>
  )
}
