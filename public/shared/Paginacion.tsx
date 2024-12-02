import React from 'react'
import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink
} from '@/src/components/ui/pagination'
import { FaAngleDoubleLeft } from 'react-icons/fa'

export const Paginacion: React.FC<any> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  const pages = []

  // Function to handle page navigation
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page)
    }
  }

  // Add Previous Button
  const previousButton = (
    <PaginationItem key="prev" className="list-none">
      <PaginationLink
        onClick={() => currentPage !== 1 && handlePageChange(currentPage - 1)}
        isActive={false}
        className={`px-3 py-1 border rounded-md cursor-pointer ${
          currentPage === 1
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-white text-main hover:bg-main_dark/60'
        } transition-colors`}
      >
        <FaAngleDoubleLeft className="" />
      </PaginationLink>
    </PaginationItem>
  )

  // Add Next Button
  const nextButton = (
    <PaginationItem key="next" className="list-none">
      <PaginationLink
        onClick={() =>
          currentPage !== totalPages && handlePageChange(currentPage + 1)
        }
        isActive={false}
        className={`px-3 py-1 border rounded-md cursor-pointer ${
          currentPage === totalPages
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-white text-main hover:bg-main_dark/60'
        } transition-colors`}
      >
        <FaAngleDoubleLeft className="rotate-180" />
      </PaginationLink>
    </PaginationItem>
  )

  if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem key={i} className="list-none">
          <PaginationLink
            onClick={() => handlePageChange(i)}
            isActive={i === currentPage}
            className={`px-3 py-1 border rounded-md cursor-pointer ${
              i === currentPage
                ? 'bg-main text-white hover:bg-main'
                : 'bg-white text-main hover:bg-main_dark/60'
            } transition-colors`}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      )
    }
  } else {
    for (let i = 1; i <= 2; i++) {
      pages.push(
        <PaginationItem key={i} className="list-none">
          <PaginationLink
            onClick={() => handlePageChange(i)}
            isActive={i === currentPage}
            className={`px-3 py-1 border rounded-md cursor-pointer ${
              i === currentPage
                ? 'bg-main text-white hover:bg-main'
                : 'bg-white text-main hover:bg-main_dark/60'
            } transition-colors`}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      )
    }
    if (currentPage > 2 && currentPage < totalPages - 1) {
      pages.push(<PaginationEllipsis key="ellipsis1" />)
      pages.push(
        <PaginationItem key={currentPage} className="list-none">
          <PaginationLink
            onClick={() => handlePageChange(currentPage)}
            isActive={true}
          >
            {currentPage}
          </PaginationLink>
        </PaginationItem>
      )
    }
    pages.push(<PaginationEllipsis key="ellipsis2" />)
    for (let i = totalPages - 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem key={i} className="list-none">
          <PaginationLink
            onClick={() => handlePageChange(i)}
            isActive={i === currentPage}
            className={`px-3 py-1 border rounded-md cursor-pointer ${
              i === currentPage
                ? 'bg-main text-white hover:bg-main'
                : 'bg-white text-main hover:bg-main_dark/60'
            } transition-colors`}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      )
    }
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      {previousButton}
      <ul className="flex space-x-1">{pages}</ul>
      {nextButton}
    </div>
  )
}
