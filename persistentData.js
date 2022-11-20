import AsyncStorage from "@react-native-async-storage/async-storage";

export const setCurrentUser = async (id) => {
    try {
        await AsyncStorage.setItem('CurrentUser', id)
    }catch (error) {
        console.log('Error al acceder a variables Persistentes: {}', error)
    }
}


export const getCurrentUser = async () => {

    try {
        const res = await AsyncStorage.getItem('CurrentUser')
        return(res)
    } catch (error) {
        console.log('Error al acceder a variables Persistentes: {}', error)
    }
}
