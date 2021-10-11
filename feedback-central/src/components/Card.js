import React from 'react'

const Card = (props) => {
    return (
        <div className="col-12">
            <div className="card" >
                <img className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{ }</h5>
                    <p className="card-text">{ }</p>
                    <button className="btn btn-primary">Update</button>
                    <button className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Card