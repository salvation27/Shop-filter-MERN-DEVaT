import React,{useState,useContext} from 'react'
import {GlobalState} from '../../GlobalState'
import axios from 'axios'


const Categories = () => {
  const state = useContext(GlobalState)
  console.log('mobila',state);
  const [categories] = state.categoriesApi.categories
  const [category,setCategory] = useState('')
  const [token] = state.token
  const[callback,setCallback] = state.categoriesApi.callback
  const[onEdit,setOnEdit] = useState(false)
  const[id,setId] = useState('')

  const createCategory = async e =>{
    e.preventDefault()
    try{
      if(onEdit){
        const res = await axios.put(`/api/category/${id}`,{name:category},{
          headers:{Authorization:token}
        })
        alert(res.data.msg);
      }else{
        const res = await axios.post('/api/category',{name:category},{
          headers:{Authorization:token}
        }) 
        alert(res.data.msg);
      }
      setOnEdit(false)
      setCategory('')
      setCallback(!callback)
    }catch (err){
      alert(err.response.data.msg)
    }
  }

  const editCategory = async (id,name)=>{
    setId(id)
    setCategory(name)
    setOnEdit(true)
  }

  const deleteCategory = async (id,name)=>{
     try{
        const res = await axios.delete(`/api/category/${id}`,{
          headers:{Authorization:token}
        })
        alert(res.data.msg +`  ${name}`)
        setCallback(!callback)
     }catch(err){
        alert(err.response.data.msg)
     }
  }

  return (
    <div className='categories'>
      <form onSubmit={createCategory}>
        <label htmlFor="category">Category</label>
        <input type="text" name="category" value={category} required
        onChange = {e=>setCategory(e.target.value)}
        />
        <button
        // onClick={onEdit ? "Update":"Save"}
        type="submit">{onEdit ? "Update":"Save"}</button>
      </form>
      <div className="col">
        {
          categories.map(cat=>(
            <div className="rowy" key={cat._id}>
               <p>{cat.name}</p>
               <div>
                 <button onClick={()=> editCategory(cat._id,cat.name)}>Править</button>
                 <button onClick = {() =>deleteCategory(cat._id,cat.name)}>Удалить</button>
               </div>
            </div>
          ))
        }
      </div>
     
    </div>
  )
}

export default Categories
