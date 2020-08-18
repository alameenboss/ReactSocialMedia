import React from 'react'

function Cover({ coverImg }) {
    return (
        <section className="cover-sec">
            <img src={coverImg} alt="" />
        </section>
    )
}

export default Cover
