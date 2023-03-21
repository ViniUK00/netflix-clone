import React, {useState, useEffect} from 'react'

function Banner() {
    const [movie,setMovie] = useState([]);

    useEffect(()=> {
        async function fetchData() {
            // 
        }
        fetchData()
    }, [])

  return (
    <header> {/* <<<< Backhround image}
        {/* title */}
        {/* div > 2 buttons */}
        {/* description */}
    </header>
  )
}

export default Banner