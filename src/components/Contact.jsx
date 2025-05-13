import '../styles/contact.css'
import { BsEnvelope, BsGeoAlt } from "react-icons/bs";
const Contact = () => {
    return (
        <>
            <section id="contact" className="contact section">
                <div className="container section-title" data-aos="fade-up">
                    <h2>İletişim</h2>
                    <p>Birlikte güzel işler başarmak için iletişime geçmekten çekinmeyin. Mesajınızı bekliyorum!</p>
                </div>

                <div className="container" data-aos="fade" data-aos-delay="100">

                    <div className="row gy-4">

                        <div className="col-lg-4">
                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                <i className="flex-shrink-0">
                                    <BsGeoAlt />
                                </i>
                                <div>
                                    <h3>Adres:</h3>
                                    <p>Arnavutköy/İSTANBUL</p>
                                </div>
                            </div>
                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                <i className='flex-shrink-0' ><BsEnvelope /></i>
                                <div>
                                    <h3>E-posta gönderin:</h3>
                                    <p>info@example.com</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-8">
                            <form className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                                <div className="row gy-4">

                                    <div className="col-md-6">
                                        <input disabled type="text" name="name" className="form-control" placeholder="Adınız" required="" />
                                    </div>

                                    <div className="col-md-6 ">
                                        <input disabled type="email" className="form-control" name="email" placeholder="E-posta adresiniz" required="" />
                                    </div>

                                    <div className="col-md-12">
                                        <input disabled type="text" className="form-control" name="subject" placeholder="Konu" required="" />
                                    </div>

                                    <div className="col-md-12">
                                        <textarea disabled className="form-control" name="message" rows="6" placeholder="İleti" required=""></textarea>
                                    </div>

                                    <div  className="col-md-12 text-center">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>

                                        <button disabled  type="submit">Mesaj Gönder</button>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Contact