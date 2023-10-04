import React from 'react'
import Navbar from './navbar'
import Card from './card'
import data from './data'


export default function App() {
  const cardData = data.map(item => {
    return (
      <Card 
      key={item.id}
      item={item}
      />
    )
  })

  return (
    <div>
        <Navbar />
        <section className='cards-list'>
            {cardData}
        </section>
        

    </div>
  )
}


