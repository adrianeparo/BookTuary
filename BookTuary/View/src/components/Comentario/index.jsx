// CommentSection.js
import React from "react";
import { CommentsContainer, Comment, Conteudo } from "./style";

function CommentSection() {
  const comments = [
    "Comentário 1: Esse é um exemplo de comentário.",
    "Comentário 2: Esse é um exemplo de comentário.",
    "Comentário 3: Esse é um exemplo de comentário.",
    "socorro00",
    // Adicione mais comentários conforme necessário
  ];

  return (
    <Conteudo>
      <CommentsContainer>
        {comments.map((comment, index) => (
          <Comment key={index}>{comment}</Comment>
        ))}
      </CommentsContainer>
    </Conteudo>
  );
}

export default CommentSection;
