import React from 'react'

export default function Modal ({isVisible, onClose}) {
    if (isVisible === false) {
        return null
    }
    const handleClick = () => {
        onClose()
    }
    return (
        <div className="absolute inset-0 bg-black bg-opacity-25 justify-center items-center backdrop-blur-sm flex w-screen h-screen">
            <div className="w-[600px] bg-white">
                Modal
            </div>
            <button onClick={handleClick}>X</button>
        </div>
    )
}
