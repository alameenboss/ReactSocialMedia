import React from 'react'

function Cover({ coverImg }) {
    return (
        <section className="cover-sec">
            <img src={coverImg} alt="" />
            {
                true && <div className="add-pic-box">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-12 col-sm-12">
                                <input type="file" id="file" />
                                <label htmlFor="file">Change Image</label>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}

export default Cover
