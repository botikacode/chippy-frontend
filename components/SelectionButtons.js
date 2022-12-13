import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'

const SelectionButtons = ({name1, name2, setType}) => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  const handleClick1 = () => {
    if(!active1 && active2) setActive2(!active2)
    if(!active1) setType("Pasear")
    setActive1(!active1)
  };

  const handleClick2 = () => {
    if(!active2 && active1) setActive1(!active1)
    if(!active2) setType("Cuidar")
    setActive2(!active2)
  };

  useEffect(() =>{
  }, [])

  return(
    <div>
      <View style={{flexDirection:"row"}}>
        <TouchableOpacity style={active1 ? styles.fabLocationBLSelected : styles.fabLocationBL } onPress={() => handleClick1()}>
            <View style={styles.fab}>
              <Text style={styles.fabText}>{name1}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={active2 ? styles.fabLocationBLSelected : styles.fabLocationBL } onPress={() => handleClick2()}>
            <View style={styles.fab}>
              <Text style={styles.fabText}>{name2}</Text>
            </View>
        </TouchableOpacity>
      </View>
    </div>
  )
}

const styles = StyleSheet.create({
  fabLocationBL: {
    backgroundColor: '#c2c4c2',
    borderRadius: 50
  },
  fabLocationBLSelected: {
    backgroundColor: '#3f403f',
    borderRadius: 50
  },
  fab: {
    color: 'grey',
    width: 80,
    height: 45,
    borderRadius: 100,
    justifyContent: 'center'
  },
  fabText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  viewContainer: {
    alignSelf: "center",
    flexDirection:"row",
  },
  visibleDiv: {
    visibility: "visible",
    paddingTop: 30
  },
  hiddenDiv: {
  visibility: "hidden",
  paddingTop: 30,
},
  EmptySnowFlake: {
    flex: 1,
    fontSize: "40px",
    color: "grey"
  },
  FilledSnowFlake: {
    flex: 1,
    fontSize: "64px",
    color: "black"
  }
});

export default SelectionButtons
