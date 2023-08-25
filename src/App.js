import { RNGestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react'

import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import { Button, Icon } from 'react-native-elements';

const Stack = createStackNavigator();

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions}>
                <Stack.Screen name="UserList" component={UserList} options={({ navigation }) => {
                    return {
                        title: "Lista de usuários",
                        headerRight: () => (
                            <Button
                                onPress={() => navigation.navigate("UserForm")}
                                type="clear"
                                icon={<Icon name="add" size={25} color="white" />}
                            />
                        )
                    }
                }}>
                </Stack.Screen>
                <Stack.Screen name="UserForm" component={UserForm} options={{
                    title: "Formulário de Usuários"
                }}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}