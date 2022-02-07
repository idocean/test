import React from 'react';

const WorkList = ({ works }) => {
    //console.log(works);
    return (
        <>
            <section id="portfolio" className="bg-light-gray">
              <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 className="section-heading">Works</h1>
                        <h3 className="section-subheading service text-muted">아이디오션은 고객만족에 그 우선가치를 둡니다.</h3>
                    </div>
                </div>
            {works.map(work =>{
                return (    
                        <div className="row" key={work.idx}>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                            <a href={work.url} target="_blank" rel="noopener noreferrer" className="portfolio-link" data-toggle="modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-arrow-circle-right fa-3x"></i>
                                    </div>
                                </div>
                                <img src={work.image_name} className="img-responsive" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <h4>{work.name}</h4>
                                <p className="text-muted"></p>
                            </div>
                        </div>
                    </div>
                );
            })}
            </div>
          </section>
        </>
    );
}

export default WorkList;