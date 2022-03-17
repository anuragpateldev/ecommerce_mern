
const Product = require("../models/productModel");

// Create Product 
// Create Product -- Admin 
exports.createProduct = async (req,res) =>{
  console.log(req.body);
  try{
    const product = await Product.create(req.body);
    console.log('result ==>',product);
    res.status(201).json({
      success: true,
      product,
    });
  }catch(err){
    res.json({message:err});
  }
}

// Get Single Product
exports.getProductDetails = async (req,res) => {
  try{
    const product = await Product.findOne();
    res.status(200).json({
      success: true,
      product,
    });
  }catch(err){
    res.json({
      message:err
    })
  }
}

// Get All Product
exports.getAllProducts = async (req,res) => {
  try{
    const products = await Product.find();
    res.status(200).json({
      success: true,
      products,
    });
  }catch(err){
    res.json({
      message:err
    })
  }
}

//-------------- Update Product --------
exports.updateProduct = async(req,res) =>{
    console.log(req.params.id);
    let product = await Product.findById(req.params.id);

    if(!product){
      return res.status(500).json({
        success:false,
        message:'Product not found'
      });
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true,
      useFindAndModify:false
    });

    res.status(200).json({
      success:true,
      message:'Product updated successfully',
      product
    });

}

//-------------- Delete Product ------
exports.deleteProduct = async(req,res) =>{
  const id = req.params.id;
  console.log('id ==>',id);

  const product = await Product.findByIdAndDelete({_id:id});
  console.log('product ==>',product);

  if(!product){
    return res.status(500).json({
      success:false,
      message:"Product could not be Deleted ,try again"
    });
  }

  return res.status(200).json({
    success:true,
    message:"Product deleted successfully"
  })

}