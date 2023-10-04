import React from 'react'

export default function Card(props){
    return (
        <div className='card'>
            <img src={props.item.imageUrl} className='card--img' />
            <div className='card--info'>
                <div className='card--info-add'>
                    <img src='../public/images/drop.png' className='card--drop'/>
                    <span className='card--country'>{props.item.location}</span> 
                    <a href={props.item.googleMapsUrl} className='card--link' target='_blank' rel='noopener noreferrer'>View on Google Maps</a>
                </div>

                <h1 className='card--h1'>{props.item.title}</h1>
                <p className='card--dates'>{props.item.startDate} - {props.item.endDate}</p>
                <p className='card--description'>{props.item.description}</p>
                

            </div>


        </div>
    )
}