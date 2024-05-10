import React from 'react'
import Table from '../Components/Table'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigation = useNavigate()
  const dataUser = [
    { id: 1, name: 'User 1', lokasi: 'Sleman, Yogyakarta' },
    { id: 2, name: 'User 2', lokasi: 'Bantul, Yogyakarta' },
    { id: 3, name: 'User 3', lokasi: 'Sleman, Yogyakarta' },
    { id: 4, name: 'User 4', lokasi: 'Bantul, Yogyakarta' },
    { id: 5, name: 'User 5', lokasi: 'Sleman, Yogyakarta' },
    { id: 6, name: 'User 6', lokasi: 'Bantul, Yogyakarta' },
    { id: 7, name: 'User 7', lokasi: 'Sleman, Yogyakarta' },
    { id: 8, name: 'User 8', lokasi: 'Sleman, Yogyakarta' },
    { id: 9, name: 'User 9', lokasi: 'Bantul, Yogyakarta' },
    { id: 10, name: 'User 10', lokasi: 'Sleman, Yogyakarta' },
  ]
  const columns = React.useMemo(
    () => [
      {
        Header: 'No',
        Cell: ({ row }) => {
          return <div>{row.index + 1}</div>
        },
      },
      {
        Header: 'Name',
        accessor: (data) => data.name,
      },
      {
        Header: 'Lokasi',
        accessor: (data) => data.lokasi,
      },
      {
        Header: 'Action',
        accessor: (data) => (
          <div>
            <p onClick={() => navigation(`/detail/${data.id}`)} className="cursor-pointer">
              See Detail
            </p>
          </div>
        ),
      },
    ],
    []
  )

  return (
    <React.Fragment>
      <div className="desktop3:p-[5rem] phone:p-[2rem] tablet:p-[2rem] laptop:p-[3rem] desktop:p-[3rem] desktop2:p-[5rem]">
        <p className="desktop3:text-[28px] phone:text-[24px] tablet:text-[24px] laptop:text-[24px] desktop:text-[24px] desktop2:text-[28px] text-[#EAB200] font-bold">Data User</p>
        <Table columns={columns} data={dataUser} />
      </div>
    </React.Fragment>
  )
}

export default Home
