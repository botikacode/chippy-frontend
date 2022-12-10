import AsyncStorage from "@react-native-async-storage/async-storage";

export const setCurrentUser = async (user) => {
    try {
        await AsyncStorage.setItem('CurrentUser', JSON.stringify(user))
    }catch (error) {
        console.log('Error al acceder a variables Persistentes: {}', error)
    }
}


export const getCurrentUser = async () => {

    try {
        const res = await AsyncStorage.getItem('CurrentUser')
        if(res !== null){
          return(JSON.parse(res))
        }
    } catch (error) {
        console.log('Error al acceder a variables Persistentes: {}', error)
    }
}
