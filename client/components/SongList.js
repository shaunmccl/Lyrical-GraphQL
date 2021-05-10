import React,{useEffect, useState} from "react"
import gql from "graphql-tag"
import {graphql} from "react-apollo";
const SongList = (props) => {

    console.log(props);


    return <div>Song List</div>
}

const query = gql`{
    songs{
        title
  }
}`;

export default graphql(query)(SongList);


  