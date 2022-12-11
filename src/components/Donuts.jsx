import React from 'react'

const Donuts = ({ donuts, loading }) => {
    if (loading) {
        return <h1>Loading...</h1>
    } else {
        console.log(donuts)
    }

    return (
        <div className="dashboard__content__donuts">
            {donuts.map((donut) => (
                <div className="dashboard__content__donuts__donut" key={donut._id}>
                    <p>{donut.dough}</p>
                </div>
            ))}
        </div>
    )
}

export default Donuts