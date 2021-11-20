import React from 'react'

export default function header () {
  return (
<section className="component-section section-top bg-gray">
  {/* <div class="hero-img bg-overlay" data-overlay="1" style="background-image: url(assets/img/price-banner.jpg);"></div> */}
  <div className="container">
    <div className="row justify-content-between align-items-center mt-5 text-lg-left text-center">
      <div className="col-md-6">
        {/* heading */}
        <h3 className>
          سبد خرید
        </h3>
      </div>
      <div className="col-md-6">
        {/* breadcrumb */}
        <nav aria-label="breadcrumb" className="float-lg-right">
          <ol className="breadcrumb bg-white btn-pill px-5 mb-0">
            <li className="breadcrumb-item"><a href="#" className="text-dark">بررسی</a></li>
            <li className="breadcrumb-item"><a href="#" className="text-dark">فروشگاه</a></li>
            <li className="breadcrumb-item active" aria-current="page">سبد خرید فروشگاه</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</section>

  )
}
