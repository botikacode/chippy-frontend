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
        <Button title="Apply" onPress={() => {
          setModalVisible(!modalVisible)
          setFilter(intermediateFilter)
          filterOcurrences()
        }} />
        <Button title="Clear" onPress={() => {
          setModalVisible(!modalVisible)
          setFilter(initialFilter)
          setIntermediateFilter(initialFilter)
        }} />
      </SafeAreaView>
    </Modal>
  );
};

export default CustomModal;
