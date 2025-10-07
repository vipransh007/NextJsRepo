const Products = async(searchParams) => {
    // const searchParams = await props.searchParams
    // console.log(searchParams);
    const category = searchParams?.category || 'all';
    console.log(category);
    const sort = searchParams?.sort || 'default';
    const page = searchParams?.page || '1';


    return <h1>Serarch Params Data in 
        ,  {category} Sorted by {sort} on the basis of page {page}
    </h1> 
}

export default Products