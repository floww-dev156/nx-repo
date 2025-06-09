import React from 'react'
import { DOMAttributes } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'

import 'swiper/css'
import { TimeOfDayEnum } from '../../../constants/DateTimeConstants'

interface AmPmPickerProps {
   value: TimeOfDayEnum
   onChange: (value: TimeOfDayEnum) => void
   swipePickerContainerProps?: DOMAttributes<HTMLDivElement>
}

const AmPmPicker = (props: AmPmPickerProps) => {
   const { value, onChange, swipePickerContainerProps } = props

   return (
      <div className='h-[132px] w-[40px]' {...swipePickerContainerProps}>
         <Swiper
            direction='vertical'
            slidesPerView={3}
            modules={[FreeMode]}
            onSlideChange={swiper => {
               onChange(
                  swiper.realIndex === 0 ? TimeOfDayEnum.AM : TimeOfDayEnum.PM
               )
            }}
            touchRatio={0.25}
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
