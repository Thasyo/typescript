import React from 'react'

interface Props {
    title: string
    content: string
    commentsQty: number
    tags: string[]
    //7-Enum
    category: Category
}

export enum Category {
  JS = "JAVASCRIPT",
  TS = "TYPESCRIPT",
  G = "GOLANG"
}

const Desestructuring = ({title, content, commentsQty, tags, category}: Props) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <p>Quantidade de comentários: {commentsQty}</p>
        <div>
            {tags.map((tag) => (
                <span>#{tag}</span>
            ))}
        </div>
        <p>Categoria: {category}</p>
    </div>
  )
}

export default Desestructuring