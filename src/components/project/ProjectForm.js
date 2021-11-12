import { useState } from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm(props){

    const[project, setProject] = useState(props.projectData || {})


    //const [categories, setCategories] = useState([])

    /*fetch("http://localhost:5000/categories",{
        method: "GET",
        headers:{
            'Content-Type': 'aplication/json'
        }
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    })*/

    const categories = [
        {
          "id": 1,
          "name": "Infra"
        },
        {
          "id": 2,
          "name": "Desenvolvimento"
        },
        {
          "id": 3,
          "name": "Design"
        },
        {
          "id": 4,
          "name": "Planejamento"
        }
      ]


      const submit = (e) =>{
          e.preventDefault()
          props.handleSubmit(project)
      }

      function handleChange(e){
          setProject({...project, [e.target.name]: e.target.value})
          console.log(project)
      }


      function handleCategory(e){
        setProject({...project, category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
            
        }})
    }

    return(
        <form onSubmit={submit} className = {styles.form}>
            <Input 
                type = "text" 
                text = "Nome do projeto" 
                name = "name" 
                placeholder = "Insira o nome do projeto"
                handleOnChange = {handleChange}
                value={project.name}
            />
            <Input 
                type = "number" 
                text = "Orçamento do projeto" 
                name = "budget" 
                placeholder = "Insira o orçamento total"
                handleOnChange = {handleChange}
                value ={project.budget}
            />

            <Select 
                name ="category_id" 
                text = "Selecione a categoria" 
                options = {categories}
                handleOnChange = {handleCategory}
                value = {project.category ? project.category.id : ''}
            />
            <SubmitButton text = {props.btnText}/>
        </form>
    )
}

export default ProjectForm