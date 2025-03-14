import React from 'react'
import PropTypes from 'prop-types'
import './UserCard.css'

const UserCard = ({ name, image, desc }) => {
  return (
    <div className='user-container'>
        <p id='user-name'>{name}</p>
        <img id='user-img' src={image} alt={name} />
        <p id='user-desc'>{desc}</p>
    </div>
  )
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
}

export default UserCard
