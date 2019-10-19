import React, { useContext } from 'react'
import { PaginationContext } from '../../../../../context/paginationContext'

const Pagination = (props) => {

    const filteredLength = props.value

    const { pagination, setPagination } = useContext(PaginationContext)

    const previousPage = () => {
        if (pagination.min !== 0) setPagination({ ...pagination, max: pagination.max - 10, min: pagination.min - 10 })
        console.log(pagination.max)
    }

    const nextPage = () => {
        if (pagination.max < filteredLength) setPagination({ ...pagination, max: pagination.max + 10, min: pagination.min + 10 })
    }

    const content = (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li class="page-item"><button className="page-link bg-primary" onClick={previousPage}>Previous</button></li>
                    <li class="page-item"><button className="page-link bg-primary" onClick={nextPage}>Next</button></li>
                </ul>
            </nav>
        </>
    )
    return content
}

export default Pagination