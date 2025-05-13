/* eslint-disable no-unused-vars */
import React from 'react'
import ProfileImage from '../assets/images/picofme.png'
import '../styles/about.css'
import { BsChevronRight } from "react-icons/bs";



const About = () => {

    const calculateAge = () => {
        const today = new Date();
        const birthDate = new Date("1988-06-20");
        let age = today.getFullYear() - birthDate.getFullYear();

        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        return age;
    };

    return (
        <section id="about" className="about section">


            <div className="container section-title" data-aos="fade-up">
                <h2>Hakkımda</h2>
                <p>
                    Merhaba! Ben yaratıcı çözümler üretmeyi seven, detaylara önem veren ve sürekli öğrenmeye açık biriyim. Teknolojiye ve tasarıma olan ilgimle projelere hem estetik hem de işlevsel bir bakış açısı kazandırıyorum. Yeni fikirler üretmek, sorunlara pratik çözümler bulmak ve birlikte büyümek için buradayım.
                </p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row gy-4 justify-content-center">
                    <div className="col-lg-4 ">
                        <img width={360}  src={ProfileImage} className="img-fluid rounded-2 shadow" alt="" />
                    </div>
                    <div className="col-lg-8 content">
                        <h2>Backend &amp; Web Geliştiricisi.</h2>
                        <p className="fst-italic py-3">
                           Merhaba! Ben bir Backend & Web Geliştiricisiyim. .NET Core ve Node.js ile güçlü, ölçeklenebilir API’ler geliştiriyor, React ile modern ve kullanıcı dostu arayüzler tasarlıyorum. Temiz kod, sürdürülebilir mimari ve sürekli öğrenme benim için vazgeçilmez. Yeni teknolojileri keşfetmeyi ve gerçek dünya problemlerine akıllı çözümler üretmeyi seviyorum.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><BsChevronRight className='icon' /> <strong>Doğum Tarihi:</strong> <span>1988</span></li>
                                    <li><BsChevronRight className='icon' /> <strong>İnternet sitesi:</strong> <span>www.example.com</span></li>
                                    <li><BsChevronRight className='icon' /> <strong>E-posta:</strong> <span>email@example.com</span></li>
                                    
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><BsChevronRight className='icon' /> <strong>Yaş:</strong> <span>{calculateAge()} </span></li>
                                    <li><BsChevronRight className='icon' /> <strong>Açık İş:</strong> <span>Evet</span></li>
                                    <li><BsChevronRight className='icon' /> <strong>Şehir:</strong> <span>İstanbul, TÜRKİYE</span></li>
                                </ul>
                            </div>
                        </div>
                        <p className="py-3">
                           Amacım; hem kullanıcı deneyimini hem de teknik kaliteyi ön planda tutan, sürdürülebilir ve yenilikçi projeler geliştirerek gerçek dünyada değer üreten çözümler ortaya koymak.
                        </p>
                    </div>
                </div>

            </div>

        </section>

    )
}

export default About