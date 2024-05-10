import React from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const CustomPagination = ({ pageIndex, pageCount, gotoPage, nextPage, previousPage, canNextPage, canPreviousPage }) => {
  const renderPageButtons = () => {
    const maxButtons = 5
    const pageButtons = []

    // Hitung nomor halaman awal dan akhir yang akan ditampilkan
    let startPage = Math.max(0, pageIndex - Math.floor(maxButtons / 2))
    let endPage = Math.min(pageCount - 1, startPage + maxButtons - 1)

    // Pastikan bahwa nomor halaman awal adalah maksimal 5 nomor sebelum halaman aktif
    startPage = Math.max(0, endPage - maxButtons + 1)

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button key={i} onClick={() => gotoPage(i)} className={`pagination-button ${pageIndex === i ? 'active' : ''} text-white`}>
          {i + 1}
        </button>
      )
    }

    return pageButtons
  }

  return (
    <div className="pagination items-center flex desktop3:justify-end phone:justify-center tablet:justify-center laptop:justify-end desktop:justify-end desktop2:justify-end">
      <button className="mr-5" onClick={() => previousPage()} disabled={!canPreviousPage}>
        <FaChevronLeft size={'22px'} color="#EAB200" />
      </button>
      <span>{renderPageButtons()}</span>
      <button className="ml-5" onClick={() => nextPage()} disabled={!canNextPage}>
        <FaChevronRight size={'22px'} color="#EAB200" />
      </button>
    </div>
  )
}

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    gotoPage,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  )

  return (
    <React.Fragment>
      <div className="phone:overflow-x-scroll phone:p-3  tablet:p-3">
        <table {...getTableProps()} style={{ width: '100%', marginTop: '3rem' }}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th className=" px-4 py-2 text-left border-r border-t border-b border-l  text-[#EAB200]" {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="border-l border-r border-b px-4 py-2 text-[#EAB200]">
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="mt-5">
          <CustomPagination
            pageIndex={pageIndex}
            pageCount={Math.ceil(data.length / 10)} // Jumlah halaman didapat dari panjang data dibagi jumlah item per halaman
            gotoPage={gotoPage}
            nextPage={nextPage}
            previousPage={previousPage}
            canNextPage={canNextPage}
            canPreviousPage={canPreviousPage}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Table
