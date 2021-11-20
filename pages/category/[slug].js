import React from 'react'
import * as api from 'services/api'
import ShopLayout from 'components/layouts/Shop'
import Filters from 'components/category/Filters'
import ProductsList from 'components/category/ProductsList'
import {useRouter} from 'next/router'
export default function Category({products,category,slug}) {
    const router = useRouter()
    const [productsList, setProductsList] = React.useState(products)
    React.useEffect(() => {
         api.get(`/api/v1/categories/${slug}/products?${(new URLSearchParams(router.query).toString())}`)
         .then(response => {
             setProductsList(response.data.products)
         })
         .catch(error => console.log(error))
    }, [router.query])
    return (
        <ShopLayout title="محصولات دسته بندی">
            <div className="component-section bg-gray">
                <div className="container">
                    <div className="row justify-content-center">
                        <Filters category={category} />
                        <ProductsList products={productsList}/>
                    </div>
                </div>
                </div>
        </ShopLayout>
    )
}
export async function getStaticProps({params}){
    const {slug} = params
    const response = await api.get(`/api/v1/categories/${slug}/products`)
    return {
        props:{
            products:response.data.products,
            category:response.data.category,
            slug
        }
    }
}
export async function getStaticPaths(){
    const response = await api.get(`/api/v1/categories`)
    const categories = response.data.categories
    const paths = categories.map(category => ({params:{slug:category.slug}}))
    return {
        paths,
        fallback:true
    }
}
