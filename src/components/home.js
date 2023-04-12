import { useState } from 'react'
import style from 'styled-components'
import axios from 'axios'


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
    background-color:gray;
    display:flex;
   justify-content:center;
   align-items:center;
`
const P = style.p`
   color:white;
` 

const Login = style.div`
   height:100%;
   width:60%;
   background-color:#006400;
   display:flex;
   justify-content:center;
   align-items:center;
   border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
   
`

const Form = style.form`
   display:flex;
   gap:2rem;
   flex-direction:column;
   align-items:center;
`


const Register = style.div`
    height:100%;
    width:40%;
    background-color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:1.5rem;
    border-top-right-radius: 10px;
   border-bottom-right-radius: 10px;
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



const HomePage = ({setlogged,logged}) =>{

    const [username,Setusername] = useState('')
    const [password,Setpassword] = useState('')
    const [loggedin,Setloggedin] = useState(false)
    const [name,Setname] = useState('')

    function handleclick(e){
        e.preventDefault()
        e.stopPropagation()
        console.log("username :", username)
        console.log("password :", password)
        Setusername('')
        Setpassword('')
        axios.post('http://localhost:8000/login',{
            username : username,
            password: password         
        }).then(response => {
            const info = response.data
            console.log(response.data[0].password)
            if(response.data === 'NOTOK') alert('User does not exits')
            else if(password !== response.data[0].password)
            alert('Invalid password')
            else{
                console.log(response.data[0].Fname,response.data[0].Lname)
                Setname(response.data[0].Fname+" "+response.data[0].Lname)
                Setloggedin(true)
            }
        })
        .catch(error => {
            console.log(error);
        });

    }

    if(loggedin) return (
        <Container>
           <InnerBox>
            <P>welcome {name}</P>
           </InnerBox>
       </Container>
    )
    else return(
        <Container>
            <InnerBox>
                <Login>
                    <Form>
                        <Input type='text' value={username} onChange={(e)=>Setusername(e.target.value)} name='username' placeholder='Enter Username'></Input>
                        <Input type='password' value={password} onChange={(e)=>Setpassword(e.target.value)}  name='password' placeholder='Enter Password'></Input>
                        <Button onClick={handleclick} type='submit'>Login</Button>
                    </Form>
                </Login>
                <Register>
                        <p>Don't have an account ?</p>
                        <Button onClick={()=>setlogged(!logged)} >Register</Button>
                </Register>
            </InnerBox>
        </Container>
    )
}

export default HomePage