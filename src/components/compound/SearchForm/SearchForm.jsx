import {useRef, useEffect} from 'react'

const SearchForm = () => {
    const searchValue = useRef('')
    useEffect(() => {
        searchValue.current.focus()
      }, [])
  return (
    <div>SearchForm</div>
  )
}

export default SearchForm