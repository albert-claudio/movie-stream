import React, {useState, useEffect} from 'react'
import './Banner.css'
import bgImg from '../Images/bg-transformer.jpg'

function Banner() {
    const [movies, setMovies] = useState([])

    const fecthData = ()=>(
        fetch('http://localhost:3000/data/movieData.json')
        .then(res=>res.json())
        .then(data => setMovies(data))
        .catch(e=>console.log(e.message))
    )

    useEffect(()=>{
        fecthData()
    },[])

  return (
    <div className="banner">
        <div className="movie">
            <img src={bgImg} alt="Background Image" className="bgImg active" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="content active">
                            <img src="" alt="Movie Title" className="movie-title" />
                            <h4>
                            <span>Year</span>
                            <span><i>age</i></span>
                            <span>length</span>
                            <span>category</span>
                            </h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quae, 
                                ad, explicabo incidunt molestiae illo distinctio veritatis in, 
                                facilis autem deleniti quos? Recusandae veritatis nobis delectus ut, 
                                neque exercitationem saepe?</p>
                                <div className="button">Button</div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="date">
                            <h2>On 15th August</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner