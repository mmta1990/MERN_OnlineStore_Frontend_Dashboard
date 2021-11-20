import React from 'react'
import useAppState from 'state/useAppState'
import Link from 'next/link'
import * as api from 'services/api'
import _ from 'lodash'
export default function Header () {
  const { state, dispatch } = useAppState()
  const [categories, setCategories] = React.useState([])
  React.useEffect(() => {
        const fetchCategories = ()=>{
          api.get('/api/v1/categories')
          .then(response => {
            setCategories(_.chunk(response.data.categories,8))
          })
          .catch(error => console.log(error))
          
        }
        fetchCategories()
  }, [])
  return (
        <>
        <section className="py-2 bg-gray-">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <small className="font-size-14">
                    هر سوالی دارید؟ با ما تماس بگیرید: 0912345678
                  </small>
                </div>
                <div className="col-md-5 text-md-right">
                  <ul className="list-inline m-0 d-inline mr-2">
                    <li className="list-inline-item font-size-14">
                      <Link href="/auth/login">
                      <a  className="text-dark">
                        ورود
                        </a>
                      </Link>
                    </li>
                    <li className="list-inline-item font-size-14 ml-2">
                    <Link href="/auth/register">
                    <a  className="text-dark">
                        ایجاد حساب کاربری
                      </a>
                    </Link>
                    </li>
                  </ul>
                    <Link href="/basket">
                            <a className="text-decoration-none text-dark ml-2">
                    <i className="vl-cart1" />
                    {state && 'basket' in state ? state.basket.length : 0}
                  </a>
                    </Link>
                </div>
              </div>
            </div>
          </section>
          <header className="app-header">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {/* <div class="branding-wrap"> */}
                  {/* brand start */}
                  <div className="navbar-brand float-left">
                    <Link href="/">
                    <a >
                      <img
                        className="logo-light"
                        src="/static/assets/img/logo.png"
                        srcSet="/static/assets/img/logo@2x.png 2x"
                        alt="CLab"
                      />
                      <img
                        className="logo-dark"
                        src="/static/assets/img/logo-dark.png"
                        srcSet="/static/assets/img/logo-dark@2x.png 2x"
                        alt="CLab"
                      />
                    </a>
                    </Link>
                  </div>
                  {/* brand end */}
                  {/* start responsive nav toggle button */}
                  <div className="nav-btn hamburger hamburger--slider js-hamburger ">
                    <div className="hamburger-box">
                      <div className="hamburger-inner" />
                    </div>
                  </div>
                  {/* end responsive nav toggle button */}
                  {/* </div> */}
                  {/* top mega menu start */}
                  <nav id="vl-menu">
                    {/* extra links start */}
                    <div className="float-right nav-extra-link">
                      <Link href="/products">
                      <a className="btn btn-sm btn-pill btn-theme mt-3"
                      >
                        محصولات
                      </a>
                      </Link>
                    </div>
                    {/* extra links end */}
                    {/* start nav */}
                    <ul className="vlmenu light-sub-menu slide-effect float-right fade-effect">
                      <li>
                        <Link  href="/">
                        <a>
                          خانه 
                        </a>
                        </Link>
                      </li>
                      <li>
                        <a href="#">
                          دسته بندی های <i className="fa fa-angle-down" />
                          <i className="arrow fa fa-angle-right" />
                        </a>
                        {/* mega menu start */}
                        <div className="mega-menu full-nav">
                            {categories.map(chunkedCategories => (
                                <div className="col5">
                                <ol>
                                  {chunkedCategories.map(category => (
                                        <li>
                                          <Link href={`/category/${category.slug}`}>
                                          <a >{category.title}</a>
                                          </Link>
                                        </li>
                                  ))}
                                </ol>
                                </div>
                            ))}
                        </div>
                        {/* mega menu end */}
                      </li>
                      <li className="menu-right">
                        <Link href="/about"><a > درباره ما </a></Link>
                      </li>
                      <li>
                        <Link href="/support"><a > پشتیبانی </a></Link>
                      </li>
                    </ul>
                    {/* end nav */}
                  </nav>
                  {/* top mega menu end */}
                </div>
              </div>
            </div>
          </header>;
        </>

  )
}
