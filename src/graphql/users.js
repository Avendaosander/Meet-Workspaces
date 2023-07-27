import { gql } from "@apollo/client";

export const LOGIN = gql`
   mutation Login($username: String!, $password: String!){
      login(username: $username, password: $password) {
         token
         username
         email
         rol
      }
   }
`

export const REGISTER = gql`
   mutation Register($username: String!, $email: String!, $password: String!){
      register(username: $username, email: $email, password: $password) {
         token
         username
         email
         rol
      }
   }
`

export const GET_USERS = gql`
   query GetUsers{
      getUsers {
         _id
         username,
         email,
         password,
         rol
      }
   }
`

export const UPDATE_USER = gql`
   mutation UpdateUser($id: ID!, $username: String, $email: String, $password: String, $rol: String) {
      updateUser(_id: $id, username: $username, email: $email, password: $password, rol: $rol) {
         _id
         username
         email
         password
         rol
      }
   }
`

export const DELETE_USER = gql`
   mutation DeleteUser($id: ID!) {
      deleteUser(_id: $id) {
         _id
      }
   }
`