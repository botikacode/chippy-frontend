import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Modal,
  Button,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import RadioButton from './RadioButton'
import {initialFilter} from '../data/initialFilter'

const CustomModal = ({ modalVisible, setModalVisible, jobs, intermediateFilter, setIntermediateFilter, jobTypesResult, setFilter }) => {

  const filterOcurrences = () =>{
    let filterJobs = jobs;
    let filterArray = [];
    let empty;

    if (filterJobs != undefined && typeof filterJobs === 'object'){
        filterJobs.map((job) => {
        if (intermediateFilter.jobType != '' && !job.jobType.includes(intermediateFilter.jobType)) {
          return
        }

        filterArray.push(job)

      })
            if (filterArray.length > 0) {
            filterJobs = filterArray;
          }
    } else {
      filterJobs = false
      empty= true
    }
    setIntermediateFilter(filterArray)
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      style={{ flex: 1 }}
      onRequestClose={() => {
        console.log('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <SafeAreaView style={{ flex: 1, padding: 20 }}>
        <View style={{ marginBottom: 20, paddingHorizontal: 30 }}>
          <Text style={{ fontSize: 26 }}>Filtering job types</Text>
        </View>

        <RadioButton handleChange={(jobType) => setIntermediateFilter({...intermediateFilter, jobType: jobType})} selected={intermediateFilter.jobType} jobTypesResult={jobTypesResult}/>
        <TouchableOpacity style={styles.buttonCeleste} onPress={() => {
          setModalVisible(!modalVisible)
          setFilter(intermediateFilter)
          filterOcurrences()
        }} ><Text style={styles.buttonText}>Apply</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonCeleste} onPress={() => {
          setModalVisible(!modalVisible)
          setFilter(initialFilter)
          setIntermediateFilter(initialFilter)
        }}><Text style={styles.buttonText}>Clear</Text></TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  main:{
    width: '100%',
    height: '100%',
    backgroundColor:'#FAFAFA',
    display:'flex',
    alignItems:'center',
    flexDirection:'column'
  },
  input: {
    width: "80%",
    marginBottom: 7,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#ced4da",
    height: 30,
    padding: 4,
    borderRadius: 5,
    backgroundColor: '#B1D8DE',
    color:'#FAFAFA'
  },
  buttonCeleste: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    marginBottom: 3,
    backgroundColor: "#51A8BB",
    width: "50%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  }

})

export default CustomModal;
