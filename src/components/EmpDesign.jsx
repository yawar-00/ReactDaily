import React from "react";
const EmpDesign = (props)=>{
    return(
        <>
            <tr>
                <td>{props.emp}</td>
                <td>{props.nm}</td>
                <td>{props.ct}</td>
                <td>{props.sal}</td>
            </tr>
        </>
    )
}
export default EmpDesign;