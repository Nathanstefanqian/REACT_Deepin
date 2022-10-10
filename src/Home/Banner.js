// import { Swiper, Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import Image from '../components/Image'
// const swiper = new Swiper('.swiper',
//     {
//         modules: [Navigation, Pagination],
//         direction: 'vertical',
//         loop: true,
//         pagination: {
//             el: '.swiper-pagination',
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         scrollbar: {
//             el: '.swiper-scrollbar',
//         }
//     }
// )
// init Swiper and configure Swiper to use modules

// const Banner = () => {
//     return (
//         <>
//             {/* <!-- Slider main container --> */}
//             <div className="swiper" width="600px" height="300px">
//                 {/* <!-- Additional required wrapper --> */}
//                 <div className="swiper-wrapper">
//                     {/* <!-- Slides --> */}
//                     <div className="swiper-slide">Slide 1</div>
//                     <div className="swiper-slide">Slide 2</div>
//                     <div className="swiper-slide">Slide 3</div>
//                     ...
//                 </div>
//                 {/* <!-- If we need pagination --> */}
//                 <div className="swiper-pagination"></div>

//                 {/* <!-- If we need navigation buttons --> */}
//                 <div className="swiper-button-prev"></div>
//                 <div className="swiper-button-next"></div>

//                 {/* <!-- If we need scrollbar --> */}
//                 <div className="swiper-scrollbar"></div>
//             </div>
//         </>
//     )
// }
const Banner = () => {
    return (
        <section className="my-banner-layout">
            <Image className="banner-img" src="banner.jpg" />
            <div className="my-banner">
                <h1>deepin 23 Preview</h1>
                <p>deepin是一款开箱即用的桌面操作系统发行版，美观易用且操作简单。系统中预装了多款自研特色应用，既能满足您的日常工作，也能让您娱乐身心</p>
                <a href="#" className="btn">下载</a>
                <a href="#" className="btn">安装说明</a>
            </div>
        </section>
    )
}
export default Banner;
