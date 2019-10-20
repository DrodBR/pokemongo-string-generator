import React, { useContext, useEffect } from 'react'
import { PaginationContext } from '../../../../../context/paginationContext'

const Pagination = (props) => {
    const { pagination, setPagination } = useContext(PaginationContext)

    useEffect(() => {
        const previousPageStyle = document.getElementById('previousPage')
        const nextPageStyle = document.getElementById('nextPage')

        if (pagination.min === 0) {
            previousPageStyle.classList.add('disabled')
        } else {
            previousPageStyle.classList.remove('disabled')
        }

        if (pagination.max >= props.filteredLength) {
            nextPageStyle.classList.add('disabled')
        } else {
            nextPageStyle.classList.remove('disabled')
        }

    }, [pagination, props.filteredLength])

    useEffect(() => {
        setPagination({ min: 0, max: 10 })
    }, [props.string])

    const previousPage = () => {
        if (pagination.min !== 0) setPagination({ ...pagination, max: pagination.max - 10, min: pagination.min - 10 })
    }

    const nextPage = () => {
        if (pagination.max < props.filteredLength) setPagination({ ...pagination, max: pagination.max + 10, min: pagination.min + 10 })
    }

    const content = (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item" id='previousPage'><button className="page-link" onClick={previousPage}>Previous</button></li>
                    <li className="page-item disabled"><button className="page-link" onClick={nextPage}>{`${pagination.max / 10} of ${Math.ceil(props.filteredLength / 10)}`}</button></li>
                    <li className="page-item" id='nextPage'><button className="page-link" onClick={nextPage}>Next</button></li>
                </ul>
            </nav>
        </>
    )
    return content
}

export default Pagination