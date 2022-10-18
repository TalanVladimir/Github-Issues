import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { setOrganisation } from '../../../../store/reducers/organisation';
import { setRepo } from '../../../../store/reducers/repo';

export const Search = () => {
  const dispatch = useDispatch();

  const [inputOrganisation, setInputOrganisation] = useState('');
  const [inputRepo, setInputRepo] = useState('');

  useEffect(() => {
    setInputOrganisation('TalanVladimir');
    setInputRepo('epam_lab');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Organisation:</Text>
      <TextInput
        placeholder='your text...'
        style={styles.input}
        onChangeText={(newOrganisation: string) => {
          setInputOrganisation(newOrganisation);
        }}
        value={inputOrganisation}
      />
      <Text style={styles.title}>Repo:</Text>
      <TextInput
        placeholder='your text...'
        style={styles.input}
        onChangeText={(newRepo: string) => {
          setInputRepo(newRepo);
        }}
        value={inputRepo}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(setOrganisation(inputOrganisation));
          dispatch(setRepo(inputRepo));
        }}
      >
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },

  title: {
    textAlign: 'left',
    fontWeight: '900',
    fontSize: 18,
    color: '#000000',
  },

  input: {
    borderColor: '#000000',
    borderWidth: 2,
    paddingLeft: 15,
    borderRadius: 4,
    borderStyle: 'solid',
    color: '#000000',
  },

  button: {
    marginTop: 10,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 4,
    backgroundColor: '#FF8000',
    alignItems: 'center',
    padding: 10,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#000000',
  },
});
