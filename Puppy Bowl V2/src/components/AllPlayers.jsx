import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function AllPlayers() {

    const [ allPuppies, setAllPuppies ] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {

            try {

                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-FTB-ET-WEB-FT`)
                const data = await response.json()

                setAllPuppies(data.results)

            } catch (err) {
                console.log('An error occurred while fetching Puppies', err)
            }



        }

        fetchData()
    }, [])

    console.log(allPuppies)

    return <>

    { AllPlayers.map((p, index) => 
        <div key={index} 
            className='puppies'
            onClick={() => navigate(`/${p.name}`)}>
           <h1>{p.name}</h1>
        </div>)
    }
</>
}