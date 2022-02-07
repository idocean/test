import React from 'react';

const Services = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h1 className="section-heading">Services</h1>
                            <h3 className="section-subheading service text-muted">아이디오션은 고객만족에 그 우선가치를 둡니다.</h3>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <img src="http://www.idocean.co.kr/new/images/service/service1.png" alt="" />
                            <h4 className="service-heading">WEB & MOBILE</h4>
                            <p className="text-muted">홈페이지, 쇼핑몰, 모바일 웹 제작<br /> 고객이 만족할 수 있는 웹사이트를 제작하여 드립니다.</p>
                        </div>
                        <div className="col-md-4">
                            <img src="http://www.idocean.co.kr/new/images/service/service2.png" alt="" />
                            <h4 className="service-heading">MAINTAINENCE</h4>
                            <p className="text-muted">웹디자인, 웹프로그램, 유지보수<br />전문적인 인력이 보다 효율적으로 관리해 드립니다.</p>
                        </div>
                        <div className="col-md-4">
                            <img src="http://www.idocean.co.kr/new/images/service/service3.png" alt="" />
                            <h4 className="service-heading">WEBHOSTING</h4>
                            <p className="text-muted">웹호스팅, SSL보안서버<br />인터넷상 공간에서 보다 안정적인 서비스를 약속드립니다.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;