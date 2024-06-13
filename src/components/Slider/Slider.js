import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
function Slider(argsSlider) {
    const [params, setParams] = useState(argsSlider.argsSlider);
    return (
        <div>
            <div class="container_slider_proyectos">
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {params.slider.map((img, i) => {
                        return <SwiperSlide key={i}><img className="img_cards" src={img} alt="" /></SwiperSlide>
                    })}
                </Swiper>
            </div>

        </div>
    );
}

export default Slider;