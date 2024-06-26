import { useEffect, useState } from "react"

function Moviedata(){
    const [jsonData, setJsonData] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch('movies-2020s.json')
                const data = await response.json();
                setJsonData(data);
            } catch (error) {
                console.error('Error', error)
            }
        }

        fetchData(setJsonData);
    },[])


    
    return(
            <section className="container">
                {jsonData.map(item => (
                    <div key={item.year} className="item-container">
                        <img src={item.thumbnail} className="item-image"/>
                        <p className="text">{item.title}</p>
                        <p className="text">{item.year}</p>
                        <img src='button.svg' className="btn-image"/>
                    </div>
                ))}
  
            </section>    
    )
}

export default Moviedata