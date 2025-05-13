
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/testimonials.css"

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Testimonials</h2>
                <p>
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                    consectetur velit
                </p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <Swiper
                    loop={true}
                    speed={600}
                    autoplay={{
                        delay: 5000,
                    }}
                    slidesPerView="auto"
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="init-swiper"
                >
                    <SwiperSlide>
                        <div className="testimonial-item">
                            <div className="row gy-4 justify-content-center">
                                <div className="col-lg-6">
                                    <div className="testimonial-content">
                                        <p>
                                            <i className="bi bi-quote quote-icon-left"></i>
                                            <span>
                                                Proin iaculis purus consequat sem cure digni ssim donec
                                                porttitora entum suscipit rhoncus. Accusantium quam,
                                                ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                                                risus at semper.
                                            </span>
                                            <i className="bi bi-quote quote-icon-right"></i>
                                        </p>
                                        <h3>Saul Goodman</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 text-center">
                                    <img
                                        src="assets/img/testimonials/testimonials-1.jpg"
                                        className="img-fluid testimonial-img"
                                        alt="Saul Goodman"
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-item">
                            <div className="row gy-4 justify-content-center">
                                <div className="col-lg-6">
                                    <div className="testimonial-content">
                                        <p>
                                            <i className="bi bi-quote quote-icon-left"></i>
                                            <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                                            <i className="bi bi-quote quote-icon-right"></i>
                                        </p>
                                        <h3>Sara Wilsson</h3>
                                        <h4>Designer</h4>
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 text-center">
                                    <img src="assets/img/testimonials/testimonials-2.jpg" className="img-fluid testimonial-img" alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-item">
                            <div className="row gy-4 justify-content-center">
                                <div className="col-lg-6">
                                    <div className="testimonial-content">
                                        <p>
                                            <i className="bi bi-quote quote-icon-left"></i>
                                            <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                                            <i className="bi bi-quote quote-icon-right"></i>
                                        </p>
                                        <h3>Jena Karlis</h3>
                                        <h4>Store Owner</h4>
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 text-center">
                                    <img src="assets/img/testimonials/testimonials-3.jpg" className="img-fluid testimonial-img" alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Diğer SwiperSlide'ları da buraya ekleyebilirsiniz */}

                </Swiper>

                {/* Pagination Dotları */}
                <div className="swiper-pagination mt-4 text-center"></div>
            </div>
        </section>
    );
};

export default Testimonials;
