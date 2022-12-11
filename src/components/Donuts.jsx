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
                    <div className="dashboard__content__donuts__donut__image">
                        <img src={donut.snapshot} alt="donut" />
                    </div>
                    <div className="dashboard__content__donuts__donut__info">
                        <h3>{donut.company}</h3>
                        <p>{donut.date}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Donuts