import './search-box.styles.css';

const SearchBox =({className, placeholder, onChangeHandler})=>{
    return (
      <input 
      class= {`search-box ${className}`}
      type = 'search'
      placeholder= {placeholder}
      onChange={onChangeHandler}
      />
    )
}
export default SearchBox;