
import userModel from '../models/user.js'

const getAllDoc =async (req,res)=>{
  try {
    const result = await userModel.find()
       
    // console.log(result)
    res.render('index',{data: result})
  
  } catch (error) {
    console.log(error)
  }
}

const editDoc = async(req,res)=>{
  // console.log(req.params.id)
  try {
    
    const result = await userModel.findById(req.params.id)
    console.log(result)
    res.render('edit', {data:result})
  } catch (error) {
    console.log(error)
  }
}



const createDoc =async(req,res)=>{
  // console.log(req.body.username)
  try {
    const {username,email,phone,birth}=req.body
    const doc =new userModel({
      username:username,
      email:email,
      phone:phone,
      birth:birth
    })
    const result = await doc.save()
    // console.log(result)
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
    
}




const updateDocById =async(req,res)=>{
  // console.log(req.params.id)
  // console.log(req.body)

  try { const result = await userModel.findByIdAndUpdate(req.params.id ,req.body,{returnDocument:'after'})
    res.redirect('/')
    console.log(result)
    
  } catch (error) {
    console.log(error)
  }
 
}


const DeleteDocById =async(req,res)=>{
 
    try {
        // confirm("Are You sure You want to delete thi user")
        const result = await userModel.findByIdAndDelete(req.params.id)
        console.log(result)
        res.redirect('/')
    
    } catch (error) {
      
    }
}

export {getAllDoc,createDoc,editDoc,updateDocById,DeleteDocById} 