import React from 'react'

import { DOMAttributes, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper/types'

import { TimeOfDayEnum } from '../../../constants/DateTimeConstants'

import 'swiper/css'

interface AmPmPickerProps {
   value: TimeOfDayEnum
   onChange: (value: TimeOfDayEnum) => void
   swipePickerContainerProps?: DOMAttributes<HTMLDivElement>
}

const AmPmPicker = (props: AmPmPickerProps) => {
   const { value, onChange, swipePickerContainerProps } = props

   const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null)

   const isAM = value === TimeOfDayEnum.AM

   useEffect(() => {
      slideToCurrentSlide()
   }, [swiperRef])

   const slideToCurrentSlide = () => {
      const updatedIndex = isAM ? 0 : 1
      swiperRef?.slideTo(updatedIndex, 0)
   }

   return (
      <div className='h-[132px] w-[40px]' {...swipePickerContainerProps}>
         <Swiper
            onSwiper={setSwiperRef}
            direction='vertical'
            slidesPerView={3}
            modules={[FreeMode]}
            onSlideChange={swiper => {
               onChange(
                  swiper.realIndex === 0 ? TimeOfDayEnum.AM : TimeOfDayEnum.PM
               )
            }}
         >
            <SwiperSlide></SwiperSlide>
            <SwiperSlide>AM</SwiperSlide>
            <SwiperSlide>PM</SwiperSlide>
            <SwiperSlide></SwiperSlide>
         </Swiper>
      </div>
   )
}

export default AmPmPicker
