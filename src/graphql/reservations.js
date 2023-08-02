import { gql } from "@apollo/client";

export const GET_RESEVATIONS = gql`
   query GetReservations {
        getReservations {
         _id
         user
         workspace
         date
         hour
         price
         duration
      }
   }
`

export const CREATE_RESERVATION = gql`
   mutation CreateReservation($date: String!,$hour: String!,$duration: String!, $price: Int!) {
    createReservation(date: $date,hour: $hour,duration: $duration, price: $price) {
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