import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function AllPlayers() {

    const [ allPuppies, setAllPuppies ] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {

            try {

                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-FTB-ET-WEB-FT/players`)
                const data = await response.json()

                setAllPuppies(data)

            } catch (err) {
                console.log('An error occurred while fetching Puppies', err)
            }



        }

        fetchData()
    }, [])

    console.log(allPuppies)

    return <>

    { allPuppies.map((p, index) => 
        <div key={index} 
            className='puppies'
            onClick={() => navigate(`/${p.id}`)}>
           <h1>{p.name}</h1>
           <img src={p.imageUrl}/>
        </div>)
    }
</>
}