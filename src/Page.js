import React from 'react'
import { useParams } from 'react-router'
import data from "./data"


export const Page = () => {
    let {pageId} = useParams()
    console.log(data.find(item => item.id ===pageId).content)
    
    return (
        <div>
            <h2>{data.find(item => item.id ===pageId).title}</h2>
            {data.find(item => item.id ===pageId).body ? 
            data.find(item => item.id ===pageId).body.map(item => {
                return (
                    <p>{item}</p>
                )
            }) :
            data.find(item => item.id ===pageId).content.map(item =>{
                return(
                    <div className="article">
                        <h3>{item.title}</h3>
                        <time>{item.date}</time>
                        {item.body.map(item=> {
                    return (
                        <p>{item}</p>
                    )
                })}
                    </div>

                )
            })
        }
        </div>
    )
}
