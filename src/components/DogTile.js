import React from 'react'

function DogTile({ dog, setDogInfo }) {
    function handleClick() {
        setDogInfo(dog)
    }
    return (
        <span onClick={handleClick} >{dog.name}</span>
    )
}

export default DogTile