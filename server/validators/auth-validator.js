const {z} = require('zod');
const signupSchema = z.object({
    username:z
    .string({required_error:"Name is required"}).trim().min(3,{message: "Name must be atleast 3 characters"}).max(255,{message:"Name must be less than 255 characters"}),
    email:z
    .string({required_error:"Name is required"}).trim().email({message:"Invalid Email address"}).min(3,{message: "Name must be atleast 3 characters"}).max(255,{message:"Name must be less than 255 characters"}),
    phone:z
    .string({required_error:"Name is required"}).trim().min(10,{message: "Phone number must be atleast 10 digits"}).max(10,{message:"Phone number should not be more than 10 digits"})
})

module.exports = signupSchema;