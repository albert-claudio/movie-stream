import React from 'react'
import './Modal.css'

function Modal({movie}) {
  return (
    <div className="movieModal">
      <a href="" className="modalClose"><ion-icon name="close-outline"></ion-icon></a>
      <iframe width="1280"
      height="720"
      src={movie.title}
      title={`${movie.title} | Official Trailer`}
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
      </iframe>
    </div>
  )
}

export default Modal