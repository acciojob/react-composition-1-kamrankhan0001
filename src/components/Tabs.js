import React , {useState} from "react";

function Tabs({tabs})
{
    const[tab,setTab] = useState('')
   
    return(
        <>
        <ul>
            {
            tabs.map((t,i)=>(
          <li key={i} onClick={() => setTab(t.content)}>{t.title}</li>
            ))
            }
        </ul>
            <p>This is the content for {tab}</p>
        </>
    )


}
export default Tabs