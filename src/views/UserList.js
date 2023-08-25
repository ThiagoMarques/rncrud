import React from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'

export default props => {
    // console.warn('error', Object.keys(props));

    function confirmUserDelete(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?',[
            {
                text: 'Sim',
                onPress() {
                    console.warn('delete' + user.id)
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUserItem({ item: user }) {
        return (
            // <Text>{user.name}</Text>
            <ListItem
                onPress={() => props.navigation.navigate('UserForm', user)}
                bottomDivider>
                <Avatar source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.ButtonGroup
                    selectedButtonStyle={{ backgroundColor: '#e2e2e2' }}

                    buttons={[
                        <Button
                            onPress={() => props.navigation.navigate('UserForm', user)}
                            type="clear"
                            icon={<Icon name="edit" size={25} color="black" />}
                        />,
                        <Button
                            onPress={() => confirmUserDelete(user)}
                            type="clear"
                            icon={<Icon name="delete" size={25} color="red" />}
                        />,
                    ]}
                />
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users} //userContext
                renderItem={getUserItem}
            />

        </View>
    )
}