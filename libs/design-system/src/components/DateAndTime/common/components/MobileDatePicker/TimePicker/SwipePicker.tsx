// Import Swiper React components
import React from 'react'

import { DOMAttributes, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper/types'

import { TimePickerTypeEnum } from '../../../constants/DateTimeConstants'

import 'swiper/css'

interface SwipePickerProps {
   value: number
   onChange: (value: number) => void
   type: TimePickerTypeEnum
   swipePickerContainerProps?: DOMAttributes<HTMLDivElement>
}

const SwipePicker = (props: SwipePickerProps) => {
   const { value, onChange, type, swipePickerContainerProps } = props

   const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null)

   const isHour = type === TimePickerTypeEnum.Hours

   useEffect(() => {
      slideToCurrentSlide()
   }, [swiperRef])

   const slideToCurrentSlide = () => {
      const index = isHour ? value + 32 : value + 33
      const updatedIndex = index % 60
      swiperRef?.slideTo(updatedIndex, 0)
   }

   const itemsCount = isHour ? 12 : 60

   const items = Array(itemsCount)
      .fill('_')
      .map((_, index) => {
         const number = isHour ? index + 1 : index
         return number.toString().padStart(2, '0')
      })

   if (isHour) items.push(...items, ...items, ...items, ...items)

   return (
      <div className='h-[220px] w-[40px]' {...swipePickerContainerProps}>
         <Swiper
            onSwiper={setSwiperRef}
            loop={true}
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
            onRealIndexChange={({ realIndex }) => {
               const updatedValue = isHour ? realIndex % 12 : realIndex
               onChange(updatedValue)
            }}
            loopAdditionalSlides={30}
         >
            {items.map(item => (
               <SwiperSlide>{item}</SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}

export default SwipePicker
