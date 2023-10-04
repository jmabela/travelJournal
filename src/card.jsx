import React from 'react'

export default function Card(props){
    return (
        <div className='card'>
            <img src={props.item.imageUrl} className='card--img' />
            <div className='card--info'>
                <img src='../public/images/drop.png' className='card--drop'/>
                <p className='card--country'>{props.item.location}</p> 
                    <a href={props.item.googleMapsUrl} className='card--link'>View on Google Maps</a>
                

            </div>
            <h1 className='card--h1'>{props.item.title}</h1>
            <p className='card--dates'>{props.item.startDate}</p>
            <p className='card--description'>{props.item.description}</p>

        </div>
    )
}