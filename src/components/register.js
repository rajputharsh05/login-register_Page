import { useState } from "react";
import style from "styled-components";
import axios from "axios";
import { Link, Router } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./home";

const Container = style.div`
    height:100vh;
    width:100vw;
    background-color:black;
    display:flex;
    justify-content:center;
    align-items:center;
` 

const InnerBox = style.div`
    height:70%;
    width:50%;
    display:flex;
    background-color:#006400;
    align-items:center;
   justify-content:center;
   border-radius:2rem;
`

const Form = style.form`
   margin-top:10px;
   display:flex;
   gap:1.8rem;
   flex-direction:column;
   align-items:center;
   justify-content:center;
`

const Input = style.input`
    width:20rem;
    height:2rem;
    border:none;
    border-radius:5px
`
const Button = style.button`
    background-color:#FFD700;
    color:white;
    width:5rem;
    height:1.5rem;
    border-radius:5px;
    border:none;
    &:hover{
        cursor:pointer;
        background-color:#DAA520;
        color:white;
    }
`

const Register = ({setlogged,logged})=>{
    
    const [Fname,SetFname] = useState('')
    const [Lname,SetLname] = useState('')
    const [Username,SetUsername] = useState('')
    const [Email,Setemail] = useState('')
    const [Password,Setpassword] = useState('')

    function handleclick(e){
        e.preventDefault()
        e.stopPropagation()
        if(Fname==="" || Lname==="" || Password===""||Email===""||Username==="")
        {
            alert("KIndly Fields are requied")
            return;
        }
            let obj = {};
            obj.Fname = Fname;
            obj.Lname = Lname;
            obj.Email = Email;
            obj.Password = Password;
            obj.Username = Username;
            console.log(obj);
            SetFname('')
            SetLname('')
            SetUsername('')
            Setpassword('')
            Setemail('')
            axios.post('http://localhost:8000/register',obj).then(response => {
                const info = response.data
                console.log(response.data)
                if(response.data === 'UserName is taken Enter another one') alert(response.data)
                else alert("User Register")
            })
            .catch(error => {
                console.log(error);
            });    

    }
      return(
            <Container>
                <InnerBox>
                    <Form>
                        <Input type="text" value={Fname} onChange={(e)=>SetFname(e.target.value)} placeholder="Enter First Name"></Input>
                        <Input type="text" value={Lname} onChange={(e)=>SetLname(e.target.value)}  placeholder="Enter Last Name"></Input>
                        <Input type="text" value={Username} onChange={(e)=>SetUsername(e.target.value)}  placeholder="Set a user Name"></Input>
                        <Input type="email" value={Email} onChange={(e)=>Setemail(e.target.value)}  placeholder="Enter your Email"></Input>
                        <Input type="password" value={Password} onChange={(e)=>Setpassword(e.target.value)}  placeholder="Set password"></Input>
                        <Button onClick={handleclick} type="subit">Register</Button>
                        <Button onClick={()=>setlogged(!logged)}  >Login Page</Button>
                    </Form>
                </InnerBox>
            </Container>
      )  
}

export default Register