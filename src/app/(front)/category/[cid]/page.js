import React from 'react';
import { productsOfCategory } from '../../page';
import { fetchData } from '../../page';
import ProductItem from '@/components/products/productItem';

const Page = async ({ params }) => {
    const categories = await fetchData("/categories");
    const cat = categories.find(item => item["id"] == params['cid']);
    const data = await productsOfCategory(cat);
    if (data.length < 1) return <h1>Il n existe aucun produit de ce catégorie</h1>;

    return (
        <>
            <h1 className="text-4xl py-2">{cat["name"]}</h1>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {data.map(it => <ProductItem key={it['id']} product={it} />)}
            </div>
        </>
    );
};

export default Page;
