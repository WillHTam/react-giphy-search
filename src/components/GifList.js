import React from 'react'
import GifItem from './GifItem'

const GifList = (props) => {
        // Did not use class GifList extends React.Component
        // because this is a stateless functional component
        // done whenever the component does not need to actively track or modify state
        // App (the parent component) will pass all the data GifList needs via props

        const gifItems = props.gifs.map((image) => {
            return <GifItem key = { image.id }
            gif = { image }
            onGifSelect = { props.onGifSelect }
            />
            // this function loops through the array of gifs passed down from state
            // for each gif, render a GifItem component
            // on each GifItem we also set a key
            // If you have multiple components of the same type, give each a unique key
            // Otherwise, it would need to rerender all of them when an update is made
        })

        return ( <div className = 'gif-list'> { gifItems } </div> )
        }

        export default GifList