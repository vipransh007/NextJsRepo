const Blog = async (props) => {
    const {slug} = await props.params;
    console.log(slug);
    
    return (
        <>
            <h1>Blog</h1>
        </>
    )
}

export default Blog