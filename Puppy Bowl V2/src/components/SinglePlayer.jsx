import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export function SinglePlayer() {

    const [ puppies, setPuppies ] = useState({})
    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-FTB-ET-WEB-FT/players/${id}`)
            const data = await response.json()

            setPuppies(cleanPuppyData(data))
        }
        fetchData()

        console.log('Use Effect')
    }, [])


    function cleanPuppyData(data) {

        return  {
            name: data.name,
            img: data.image, 
            breed: data.breed,
            status: data.status
        }
    }

    console.log(puppies)
    console.log('Id:', id)
    console.log('Page Loads')
    return <div className='singlePuppy'>
        <h1>{puppies.name}</h1>
        <img src={puppies.imageUrl}/>
        <h3>{puppies.breed}</h3>
        <h3>{puppies.status}</h3>
        <ul>{
            puppies.name &&
            puppies.imageUrl
        }</ul>

        <Link to='/'><button>Go Back</button></Link>
    </div>
}
