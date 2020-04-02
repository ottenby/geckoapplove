// router.get("/order", verifyToken,async (req, res)=>{
//     const user = await User.findOne({_id: req.body.user._id}).populate("wishlist.productId")
    
//     return stripe.checkout.sessions.create({
//         payment_method_types: ["card"],
//         line_items: user.wishlist.map((product)=>{
//             return {
//                 name: product.productId.name,
//                 amount:product.productId.price*100, //öre *100 = 1 kronor
//                 quantity: 1, 
//                 currency:"sek"
//             }
//         }),
//         success_url:req.protocol +   "://" + req.get("Host") +  "/",
//         cancel_url:"http://localhost:8002/products"
//         // ":" + process.env.PORT + 
   
//     }).then( (session)=>{
//         console.log(session)
//     res.render("checkout.ejs", {user, sessionId:session.id})
//     })