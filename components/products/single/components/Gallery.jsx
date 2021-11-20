import React from 'react'

export default function Gallery ({ images }) {
  images = [...images, ...images, ...images]
  return (
  <div className="col-md-6">
    <div
      className="owl-carousel owl-theme dot-style-1 nav-round owl-loaded owl-drag"
      data-items="[1,1]"
      data-margin={30}
      data-autoplay="true"
      data-loop="true"
      data-nav="true"
      data-dots="true"
    >
      <div className="owl-stage-outer">
        <div
          className="owl-stage"
          style={{
            transform: 'translate3d(-2280px, 0px, 0px)',
            transition: 'all 0.4s ease 0s',
            width: 3990
          }}
        >
          {images.map((image, index) => (
                      <div key={index} className="owl-item cloned" style={{ width: 540, marginRight: 30 }}>
                        <div className="item">
                          <a href="#" className="card border-0">
                            <img
                              className="card-img rounded"
                              src={image}
                              alt="card image"
                            />
                          </a>
                        </div>
          </div>
          ))}
        </div>
      </div>
      <div className="owl-nav">
        <button type="button" role="presentation" className="owl-prev">
          <i className="fa fa-chevron-left" />
        </button>
        <button type="button" role="presentation" className="owl-next">
          <i className="fa fa-chevron-right" />
        </button>
      </div>
    </div>
  </div>
  )
}
