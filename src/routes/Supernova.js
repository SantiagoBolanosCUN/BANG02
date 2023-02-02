import React from "react";

import planetaMini from "../assets/planetaMini.png";
import asisejuegabang from "../assets/asisejuegabang.png";

import { history } from "../components/History";

export default function Supernova() {
  const onClickHandler = () => {
    history.push("/Home");
  };
  return (
    <section className="grid  min-h-screen bg-gradient-to-r from-indigo-900 via-fuchsia-900 to-indigo-900">
      <div className="absolute top-10 left-5 sm:top-10 sm:left-20 hover:scale-125">
        <button>
          <img
            src={planetaMini}
            onClick={onClickHandler}
            alt="image1"
            className="h-[40px] sm:h-[50px]"
          />
          <h1 className="font-bold font-['Montserrat'] pt-1 text-white">
            Inicio
          </h1>
        </button>
      </div>
      <div className="text-center sm:px-20 sm:text-left p-4 pt-10 max-w-9xl grid gap-4 sm:grid-cols-2">
        <div class="grid  place-items-center   sm:col-span-2">
          <img className="h-[140px] sm:h-[200px]" src={asisejuegabang} />
        </div>
        <div class=" text-center">
          <iframe
            src="https://player.vimeo.com/video/764601921?h=001958c483&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video"
            // style="position:absolute;top:0;left:0;width:100%;height:100%;"
          ></iframe>
          {/* <h2 className="text-yellow-400 pt-4 ">Hola</h2> */}
        </div>
        <div class="">
          <iframe
            src="https://player.vimeo.com/video/764600845?h=d77fcb0dc3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video"
            title="Capacitaci&amp;oacute;n_BANG_Parte_2_Editado"
          ></iframe>
        </div>
        <div class="">
          <iframe
            src="https://player.vimeo.com/video/764603812?h=a5f02fc291&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full h-full aspect-video"
            title="Capacitaci&amp;oacute;n_BANG_Parte_2_Editado"
          ></iframe>
        </div>
        <iframe
          src="https://player.vimeo.com/video/764597236?h=0e9b6132e9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-full aspect-video"
          title="Capacitaci&amp;oacute;n_BANG_Parte_2_Editado"
        ></iframe>
      </div>

      {/* <div class="grid overflow-hidden grid-cols-1 md:grid-cols-12 grid-rows-3 gap-6 pt-10">
        <div class="grid  place-items-center box row-start-1 row-end-1 col-start-3 col-end-11">
          <img className="h-[200px] sm:h-[230px]" src={asisejuegabang} />
        </div>
        <div class="box row-start-2 col-start-3 col-end-7">
          <iframe
            src="https://player.vimeo.com/video/764601921?h=001958c483&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video"
            // style="position:absolute;top:0;left:0;width:100%;height:100%;"
          ></iframe>
        </div>
        <div class="box row-start-2 col-start-7 col-end-11">
          <iframe
            src="https://player.vimeo.com/video/764600845?h=d77fcb0dc3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video"
            title="Capacitaci&amp;oacute;n_BANG_Parte_2_Editado"
          ></iframe>
        </div>
        <div class="box row-start-3 col-start-3 col-end-7">
          <iframe
            src="https://player.vimeo.com/video/764603812?h=a5f02fc291&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video"
            title="Capacitaci&amp;oacute;n_BANG_Parte_2_Editado"
          ></iframe>
        </div>
        <div class="box row-start-3 col-start-7 col-end-11">5</div>
      </div> */}
      {/* <section className="py-20 px-20">
        <div className="flex flex-wrap -mx-1">
          <div className="sm:w-1/2 px-4  mb-8 sm:mb-5">
            <iframe
              src="https://player.vimeo.com/video/764601921?h=001958c483&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video"
              // style="position:absolute;top:0;left:0;width:100%;height:100%;"
            ></iframe>
          </div>
          <div className="sm:w-1/2 px-4  mb-8 sm:mb-0">
            <iframe
              src="https://player.vimeo.com/video/764600845?h=d77fcb0dc3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video"
              title="Capacitaci&amp;oacute;n_BANG_Parte_2_Editado"
            ></iframe>
          </div>
          <div className="sm:w-1/2 px-4  mb-8 sm:mb-0">
            <iframe
              src="https://player.vimeo.com/video/764600845?h=d77fcb0dc3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video"
              title="Capacitaci&amp;oacute;n_BANG_Parte_2_Editado"
            ></iframe>
          </div>
          <div className="sm:w-1/2 px-4 mb-8 sm:mb-0">
            <iframe
              src="https://player.vimeo.com/video/764600845?h=d77fcb0dc3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video"
              title="Capacitaci&amp;oacute;n_BANG_Parte_2_Editado"
            ></iframe>
          </div>
        </div>
      </section> */}
      {/* <div className="max-w-3xl mx-auto  ">
        <Swiper
          className=""
          centeredSlides={true}
          autoplay={{
            delay: 10500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="flex justify-between items-start p-4 rounded-t  border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
                {"hola"}
              </h3>
            </div>
            <div className="">
              <iframe
                src="https://player.vimeo.com/video/764601921?h=001958c483&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className=""
                // style="position:absolute;top:0;left:0;width:100%;height:100%;"
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-between items-start p-4 rounded-t  border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
                {"hola2"}
              </h3>
            </div>
            <YoutubeEmbed embedId="voLlzxR63Gc" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-between items-start p-4 rounded-t  border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
                {"hola3"}
              </h3>
            </div>
            <YoutubeEmbed embedId="Pw9NbIzoYc8" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-between items-start p-4 rounded-t  border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
                {"hola4"}
              </h3>
            </div>
            <YoutubeEmbed embedId="mghzxW_giT0" />
          </SwiperSlide>
        </Swiper>
      </div> */}
    </section>
  );
}
