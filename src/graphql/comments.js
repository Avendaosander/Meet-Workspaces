import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
   mutation CreateComment($workspace: ID!, $content: String!) {
      createComment(workspace: $workspace, content: $content) {
         _id
         user {
            _id
            username
         }
         workspace
         content
         createdAt
         updatedAt
      }
   }
`

export const DELETE_COMMENT = gql`
   mutation DeleteComment($id: ID!) {
      deleteComment(_id: $id) {
         _id
      }
   }
`
