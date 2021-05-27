import React, {FC, useState, useEffect, useMemo} from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setNumber} from '../redux/actions/saveNumberActions';
import ModalComponent from './ModalComponent';

const Home: FC = () => {
  const [box1, setBox1] = useState(() => randomNumber());
  const [box2, setBox2] = useState(() => randomNumber());
  const [box3, setBox3] = useState(() => randomNumber());
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    const data = [];
    data.push(box1, box2, box3);
    dispatch(setNumber(data));
  }, [box1, box2, box3]);

  function randomNumber() {
    return Math.floor(Math.random() * 9 + 1);
  }

  function generateNumber(): void {
    setBox1(randomNumber());
    setBox2(randomNumber());
    setBox3(randomNumber());
  }

  function showLog() {
    setModalVisible(true);
  }
 
  const toggleModal = () => {
    setModalVisible({modalVisible: !modalVisible});
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={styles.title}>Pickr Task</Text>
      <View style={styles.container}>
        <View style={styles.boxes}>
          <View style={styles.boxWithShadow}>
            <Text style={styles.text}>{box1}</Text>
          </View>
          <View style={styles.boxWithShadow}>
            <Text style={styles.text}>{box2}</Text>
          </View>
          <View style={styles.boxWithShadow}>
            <Text style={styles.text}>{box3}</Text>
          </View>
        </View>
        <View style={styles.buttonContent}>
          <TouchableOpacity onPress={generateNumber} style={styles.button}>
            <Text style={styles.buttonText}>Generate</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showLog} style={styles.button}>
            <Text style={styles.buttonText}>Show Log</Text>
          </TouchableOpacity>
        </View>
        <Text style={{textAlign: 'center', fontSize: 18, color: '#134E9B'}}>
          by Miguel Rivas | rivasmig@gmail.com{' '}
        </Text>
      </View>
      <ModalComponent
        openModal={modalVisible}
        closeModal={() => toggleModal()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  title: {
    marginTop: '5%',
    fontSize: 40,
    color: '#E55C0C',
    textAlign: 'center',
    fontWeight: '700',
  },
  boxes: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  boxWithShadow: {
    width: '25%',
    height: '50%',
    justifyContent: 'center',
    backgroundColor: '#134E9B',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  button: {
    backgroundColor: '#26AA7D',
    height: '40%',
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
  },
});

export default Home;
