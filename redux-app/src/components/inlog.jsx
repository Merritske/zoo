import { useState } from "react"


export default function Inlog() {
    const[name, setName] = useState("")
    const [lastName, setLastName] = useState("")
  return (
    <div>
<form className="inlog">
    <label>Fill in your name </label>
    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
    <label>Fill in lastname </label>
    <input type="text" value={lastName} onChange={(e)=> setLastName(e.target.value)} />

</form>
<h1>Welcome {name} {lastName}  </h1>


    </div>
  )
}
