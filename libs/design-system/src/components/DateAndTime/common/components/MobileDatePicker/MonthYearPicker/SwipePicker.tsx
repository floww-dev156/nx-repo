// Import Swiper React components
import React from 'react'
import { DOMAttributes, useEffect, useState } from 'react'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'

import 'swiper/css'
import {
   MOBILE_DATE_PICKER_END_YEAR,
   MOBILE_DATE_PICKER_START_YEAR,
   MONTHS_LIST,
   MonthYearPickerTypeEnum
} from '../../../constants/DateTimeConstants'

interface SwipePickerProps {
   value: number
   onChange: (value: number) => void
   type: MonthYearPickerTypeEnum
   swipePickerContainerProps?: DOMAttributes<HTMLDivElement>
}

const SwipePicker = (props: SwipePickerProps) => {
   const { value, onChange, type, swipePickerContainerProps } = props

   const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null)

   const isMonth = type === MonthYearPickerTypeEnum.Months

   useEffect(() => {
      slideToCurrentSlide()
   }, [swiperRef])

   const slideToCurrentSlide = () => {
      const updatedIndex = isMonth ? value : value
      swiperRef?.slideTo(updatedIndex, 0)
   }

   const items = isMonth
      ? MONTHS_LIST
      : Array(MOBILE_DATE_PICKER_END_YEAR - MOBILE_DATE_PICKER_START_YEAR)
           .fill('_')
           .map((_, index) => MOBILE_DATE_PICKER_START_YEAR + index)

   return (
      <div className='h-[220px] w-[60px]' {...swipePickerContainerProps}>
         <Swiper
            onSwiper={setSwiperRef}
            direction='vertical'
            slidesPerView={5}
            freeMode={{
               enabled: true,
               sticky: true,
               momentumRatio: 0.25,
               momentumVelocityRatio: 0.7
            }}
            centeredSlides
            modules={[FreeMode]}
            onSlideChange={({ realIndex }) => {
               const updatedValue = isMonth ? realIndex : realIndex
               onChange(updatedValue)
            }}
         >
            {items.map(item => (
               <SwiperSlide>{item}</SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}

export default SwipePicker
