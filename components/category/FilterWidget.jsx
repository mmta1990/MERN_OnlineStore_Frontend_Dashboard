import React from 'react'
import * as queryString from 'services/querystring'
import { useRouter } from "next/router";
export default function FilterWidget(props) {
    const router = useRouter()
    const filterProducts = (event,title,slug)=> {
        const query = event.target.checked 
        ? queryString.addQueryArg(router.query,title,slug) 
        : queryString.removeQueryArg(router.query,title,slug)
        router.push({
            pathname:router.pathname,
            query
        })
    }
    return (
        <div className="card border-0 mb-md-0 mb-3 box-hover">
        <div className="card-body py-4">
            <h5 className="mb-4">{props.title}</h5>
            <div className="mb-4">
            <ul className="list-group">
                {props.attributes.map((attribute,index) =>(
                        <li className="list-group-item p-3 m-0"> 
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                        <input
                        onChange={e => {filterProducts(e,props.title,attribute.slug)}}
                         type="checkbox" className="custom-control-input" id={`${attribute.slug}-${index}`} />
                        <label className="custom-control-label" htmlFor={`${attribute.slug}-${index}`}>{attribute.title}</label>
                        </div>
                    </div>
                            </li>
                ))}
                </ul>
            </div>
        </div>
    </div>
    )
}
