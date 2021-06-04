import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DataListing from './DataListing';
import realm, {getFormList, addToForm, deleteForm} from './RealmDB';

interface Props {}

const Main = (props: Props) => {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [cmpy, setCmpy] = useState('');
  const [getList, setList] = useState(getFormList());

  return (
    <View style={{flex: 1, padding: 20}}>
      <TextInput
        style={Styles.inputView}
        placeholder="Enter Name"
        value={name}
        onChangeText={txt => {
          setName(txt);
        }}
      />
      <TextInput
        style={Styles.inputView}
        placeholder="Enter Place"
        value={place}
        onChangeText={txt => {
          setPlace(txt);
        }}
      />
      <TextInput
        style={Styles.inputView}
        placeholder="Enter Company"
        value={cmpy}
        onChangeText={txt => {
          setCmpy(txt);
        }}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity
          style={Styles.btn}
          onPress={() => {
            addToForm(name, place, cmpy);
            setList(getFormList());
          }}>
          <Text>SAVE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.btn}
          onPress={() => {
            deleteForm();
            setList(getFormList());
          }}>
          <Text>DELETE ALL</Text>
        </TouchableOpacity>
      </View>
      <DataListing list={getList} />
    </View>
  );
};

export default Main;

const Styles = StyleSheet.create({
  inputView: {
    borderWidth: 1,
    padding: 5,
    marginVertical: 10,
  },
  btn: {
    padding: 10,
    margin: 20,
    alignSelf: 'center',
    borderWidth: 1,
  },
});
