import { StyleSheet, Text, View, Image, Avatar } from 'react-native'
import React from 'react'
import { ListItem } from "@rneui/themed";

const List = ({item}) => {
  return (
    <ListItem>
      <ListItem.Content>
        <Avatar i/>
        <ListItem.Title>{item.name}</ListItem.Title>
        <View>
         
          <Text >5 months ago</Text>
        </View>
       
      </ListItem.Content>
    </ListItem>
      
    
  )
}

export default List

const styles = StyleSheet.create({})