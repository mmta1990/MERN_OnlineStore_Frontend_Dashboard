import React from 'react'

export default function Header() {
    return (
<section className="section-gap section-top bg-white text-center">
  {/* <div class="hero-img bg-overlay" data-overlay="1" style="background-image: url(assets/img/price-banner.jpg);"></div> */}
  <div className="container">
    <div className="row justify-content-md-center align-items-center">
      <div className="col-md-7">
        {/* heading */}
        <h2 className>صفحه اصلی فروشگاه</h2>
        {/* breadcrumb */}
        <nav aria-label="breadcrumb" className="d-inline-block">
          <ol className="breadcrumb bg-white btn-pill px-5">
            <li className="breadcrumb-item">
              <a href="#" className="text-dark">
                بررسی
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="text-dark">
                فروشگاه
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              فروشگاه 3
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</section>
    )
}
