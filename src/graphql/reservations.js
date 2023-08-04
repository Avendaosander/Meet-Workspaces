import { gql } from "@apollo/client";

export const GET_RESERVATIONS = gql`
query GetReservations {
   getReservations {
     _id
     user {
       _id
       username
     }
     workspace {
       _id
       title
       address
     }
     date
     hour
     duration
     price
   }
 }
`

export const CREATE_RESERVATION = gql`
   mutation CreateReservation($workspace: ID!, $date: String!,$hour: String!,$duration: String!, $price: Int!) {
    createReservation(workspace: $workspace,date: $date,hour: $hour,duration: $duration, price: $price) {
         _id
         user{
            _id
            username
         }
         workspace{
            _id
            title
            address
            price
         }
         date
         hour
         duration
         price
      }
   }
`

export const DELETE_RESERVATION = gql`
   mutation DeleteReservation($id: ID!) {
      deleteReservation(_id: $id) {
         _id
      }
   }
`