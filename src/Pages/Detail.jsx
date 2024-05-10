import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { FaAngleLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

ChartJS.register(ArcElement, Tooltip, Legend)

function BoxCalculator(props) {
  const [animatedValue, setAnimatedValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (animatedValue < props.targetValue) {
        setAnimatedValue((prevValue) => prevValue + 1)
      } else {
        clearInterval(interval)
      }
    }, 10)
    return () => clearInterval(interval)
  }, [animatedValue, props.targetValue])
  return (
    <div className="bg-transparent border border-[#EAB200] w-full h-full rounded-md p-3">
      <p className="text-[20px] phone:text-center tablet:text-center laptop:text-center">{props.title}</p>
      <hr className="mt-3" />
      <div className="mt-3">
        {props.title === 'KONEKSI' ? (
          <p className="desktop3:text-[100px] desktop2:text-[100px] desktop:text-[70px] phone:text-[60px] tablet:text-[70px] laptop:text-[70px] py-2 text-center calculator text-[#EAB200]">{animatedValue}</p>
        ) : (
          <p className="desktop3:text-[100px] desktop2:text-[100px] desktop:text-[70px] phone:text-[60px] tablet:text-[70px] laptop:text-[70px] py-2 text-center calculator text-[#EAB200]">{animatedValue} %</p>
        )}
      </div>
    </div>
  )
}

function Box(props) {
  return (
    <div className="bg-transparent border border-[#EAB200] w-full h-full rounded-md p-3">
      <p className="text-[20px] phone:text-center tablet:text-center laptop:text-center">{props.title}</p>
      <hr className="mt-3" />
      <div className="mt-3">{props.children}</div>
    </div>
  )
}

function Detail() {
  const navigate = useNavigate()

  const nilaiAir = 60
  const data = {
    labels: ['Air'],
    datasets: [
      {
        data: [nilaiAir, 100 - nilaiAir],
        backgroundColor: ['#fff', '#36A2EB'],
        hoverBackgroundColor: ['#fff', '#36A2EB'],
        borderWidth: 1,
        borderColor: '#36A2EB',
      },
    ],
  }

  const nilaiHama = 50
  const dataHama = {
    labels: ['Hama'],
    datasets: [
      {
        data: [nilaiHama, 100 - nilaiHama],
        backgroundColor: ['#EAB200', '#fff'],
        hoverBackgroundColor: ['#EAB200', '#fff'],
        borderWidth: 1,
        borderColor: '#fff',
      },
    ],
  }

  return (
    <React.Fragment>
      <div className="desktop3:p-[5rem] phone:p-[2rem] tablet:p-[2rem] laptop:p-[3rem] desktop:p-[3rem] desktop2:p-[5rem]">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => navigate('/')}>
            <FaAngleLeft size={'30px'} color="#EAB200" />
          </div>
          <p className="text-[28px] text-[#EAB200] font-bold">Data User</p>
        </div>
        <p className="text-[28px] desktop3:text-left phone:text-center tablet:text-center pt-5 text-white">Light Trap</p>
        <div className="grid desktop3:grid-cols-3 desktop3:gap-[30px] desktop2:grid-cols-3 desktop2:gap-[30px] desktop:grid-cols-3 desktop:gap-[30px] tablet:gap-[20px] laptop:grid-cols-1 laptop:gap-[20px] mt-[40px]">
          <BoxCalculator title={'KONEKSI'} targetValue={100} />
          <Box title={'LED'}>
            <div className="flex justify-center pt-[5%]">
              <div className="bg-red-600 desktop3:w-[80px] desktop3:h-[80px] desktop2:w-[80px] desktop2:h-[80px] desktop:w-[80px] desktop:h-[80px] laptop:w-[70px] laptop:h-[70px] phone:w-[60px] phone:h-[60px] tablet:w-[60px] tablet:h-[60px] rounded-full"></div>
            </div>
            <p className="text-center text-red-500 font-bold mt-4 desktop3:text-[30px] desktop2:text-[30px] desktop:text-[27px] phone:text-[25px] tablet:text-[25px] laptop:text-[25px]">MERAH</p>
          </Box>
          <BoxCalculator title={'STATUS AIR'} targetValue={100} />
        </div>
        {/* ----- */}
        <div className="grid desktop3:grid-cols-2 desktop3:gap-[30px] desktop2:grid-cols-2 desktop2:gap-[30px] desktop:grid-cols-2 desktop:gap-[30px] tablet:gap-[20px]  desktop3:mt-[40px] desktop2:mt-[40px] desktop:mt-[40px] phone:mt-[20px] tablet:mt-[20px] laptop:mt-[20px] laptop:grid-cols-2 laptop:gap-[20px]">
          <Box title={'DATA WADAH'}>
            <div className="mx-auto desktop3:w-[300px] desktop2:flex desktop2:justify-center tablet:flex tablet:justify-center laptop:flex laptop:justify-center desktop:flex desktop:justify-center">
              <Pie data={data} />
            </div>
          </Box>
          <Box title={'DATA HAMA'}>
            <div className="mx-auto desktop3:w-[300px] desktop2:flex desktop2:justify-center tablet:flex tablet:justify-center laptop:flex laptop:justify-center desktop:flex desktop:justify-center">
              <Pie data={dataHama} />
            </div>
          </Box>
        </div>
        {/* ----- */}
      </div>
    </React.Fragment>
  )
}

export default Detail
