import React from "react";
import { CommentsContainer, Conteudo, PlaceholderImage } from "./style";
import CommentPlaceholder1 from "../../assets/comment-placeholder1.svg";
import CommentPlaceholder2 from "../../assets/comment-placeholder2.svg";
import CommentPlaceholder3 from  "../../assets/comment-placeholder3.svg";

function CommentSection() {
  const comments = [
    CommentPlaceholder1,
    CommentPlaceholder2,
    CommentPlaceholder3,
    // Adicione mais imagens conforme necessário
  ];

  return (
    <Conteudo>
      <CommentsContainer>
        {comments.map((image, index) => (
          <PlaceholderImage key={index} src={image} alt={`Comentário Ilustrativo ${index + 1}`} />
        ))}
      </CommentsContainer>
    </Conteudo>
  );
}

export default CommentSection;

