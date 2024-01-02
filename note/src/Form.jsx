import { useState } from "react";
const Form=()=>{
    const [Maintopic, setMaintopic]=useState(" ");
    const [Subtopic, setSubtopic]=useState(" ");
    const [content, setcontent]=useState(" ");  

return <main>
    <form className="form">
        <legend>Taking note</legend>
        <input placeholder="main text"
         type="text" 
         className="main_topic"
          value={Maintopic}
          onChange={(event)=>{
            setMaintopic(event.target.value);
          }}
          />
        <input placeholder="sub text"
         type="text" 
         className="sub_topic" 
         value={Subtopic}
         onChange={(event)=>{
            setSubtopic(event.target.value);
         }}/>
        <textarea 
         className="text_topic"
         value={content}
         onChange={(event)=>{
            setcontent(event.target.value);
         }}
         />
        <input  type="submit"/>
    </form>
</main>
}
export default Form;
