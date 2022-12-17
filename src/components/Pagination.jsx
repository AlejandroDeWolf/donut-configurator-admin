import React from 'react'

const Pagination = ({ donutsPerPage, totalDonuts, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalDonuts / donutsPerPage); i++) {
        pageNumbers.push(i)
    }

    const activePage = (e) => {
        const paginationItems = document.querySelectorAll('.pagination__item__link')
        paginationItems.forEach(item => {
            item.classList.remove('active')
        })
        e.target.classList.add('active')
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="pagination__item">
                        <button onClick={(e) => { paginate(number); activePage(e) }} className="pagination__item__link">{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination