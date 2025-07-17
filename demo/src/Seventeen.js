import React from 'react'

function Seventeen({items, itemPerpage}) {

    const [currentpage, setCurrentpage] = React.useState(1)

    const indexOfLastItem = currentpage * itemPerpage
    const indexOfFirstItem = indexOfLastItem - itemPerpage
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem) 

    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(items.length / itemPerpage); i++) {
        pageNumber.push(i)
    }


    
  return (
    <div>
        <ul>
            {currentItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        {pageNumber.map((number, index) => (
            <button key={index} onClick={() => setCurrentpage(number)}>{number}</button>
        ))}
    </div>
  )
}

export default Seventeen