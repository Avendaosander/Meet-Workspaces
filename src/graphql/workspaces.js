import { gql } from "@apollo/client";

export const GET_WORKSPACES = gql`
   query GetWorkspaces {
      getWorkspaces {
         _id
         title
         capacity
         description
         address
         lat
         lon
         weekdays
         from
         to
         price
      }
   }
`

export const GET_WORKSPACE = gql`
   query GetWorkspace($id: ID!) {
      getWorkspace(_id: $id) {
         workspace {
            _id
            title
            capacity
            description
            address
            lat
            lon
            weekdays
            from
            to
         }
         comments {
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
   }
`

export const CREATE_WORKSPACE = gql`
   mutation CreateWorkspace($title: String!, $capacity: Int!, $description: String!, $address: String!, $lat: String!, $lon: String!, $weekdays: [String]!, $from: String!, $to: String!, $price: Int!) {
      createWorkspace(title: $title, capacity: $capacity, description: $description, address: $address, lat: $lat, lon: $lon, weekdays: $weekdays, from: $from, to: $to, price: $price) {
         _id
         title
         description
         address
         lat
         lon
         capacity
         price
         weekdays
         from
         to
      }
   }
`

export const UPDATE_WORKSPACE = gql`
   mutation UpdateWorkspace($id: ID!, $title: String, $description: String, $address: String, $lat: String, $lon: String, $capacity: Int, $price: Int, $weekdays: [String], $from: String, $to: String) {
      updateWorkspace(_id: $id, title: $title, description: $description, address: $address, lat: $lat, lon: $lon, capacity: $capacity, price: $price, weekdays: $weekdays, from: $from, to: $to) {
         _id
         title
         capacity
         description
         address
         lat
         lon
         price
         from
         to
         weekdays
      }
   }
`

export const DELETE_WORKSPACE = gql`
   mutation DeleteWorkspace($id: ID!) {
      deleteWorkspace(_id: $id) {
         _id
      }
   }
`