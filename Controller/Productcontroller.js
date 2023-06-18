import products from "../Modals/Product.js";

export const addproduct = async (req,res) =>
{
    try{  

        const {title,price,description,image,category,id,pin} = req.body;
        if(!title) return res.send("Title is required");
        if(!price) return res.send("Price is required");
        if(!description) return res.send("Description is required");
        if(!image) return res.send("Image is required");
        if(!category) return res.send("Category is required");


        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: title,
                    price:price,
                    description:description,
                    image: image,
                    category:category
                }
            )
        })
            .then(res=>res.json())
            .then(json=>
                {console.log(json)
                 res.send(json)   
                })
    }
    catch(err)
    {
        return res.send(err);
    }
}


export const getallproducts = async (req,res) =>
{
    try{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>
                {console.log(json)
                    res.send(json)
                })
    }
    catch(err)
    {
        return res.send(err)
    }
}