import {AsyncStorage} from 'react-native-community/async-storage-native'

export const setCurrentUser = async (id) => {
    try {
        await AsyncStorage.setItem('CurrentUser', id)
    }catch (error) {
        console.log('Error al acceder a variables Persistentes: {}', error)
    }
}


export const getCurrentUser = async (id) => {
    try {
        const res = await AsyncStorage.getItem('CurrentUser')
        return (res)
    } catch (error) {
        console.log('Error al acceder a variables Persistentes: {}', error)
    }
}