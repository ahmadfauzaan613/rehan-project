import React, { useEffect, useState } from 'react'
import Home from './Home'

function Loading() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <React.Fragment>
      {isLoading ? (
        <div className="desktop3:mt-[17%] phone:mt-[60%] tablet:mt-[40%] laptop:mt-[40%] desktop:mt-[30%] desktop2:mt-[17%]">
          {/* <p className="phone:text-[30px] tablet:text-[30px] laptop:text-[30px] desktop:text-[35px] text-center mt-[3rem] desktop3:text-[50px] desktop2:text-[40px] text-[#EAB200] font-bold">Selamat Datang</p> */}
          <div className="flex justify-center mt-[3%]">
            <div className="phone:mt-[10%] tablet:mt-[6%] laptop:mt-[6%] desktop:mt-[4%] desktop2:mt-[3%] desktop3:mt-[3%]">
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </React.Fragment>
  )
}

export default Loading
