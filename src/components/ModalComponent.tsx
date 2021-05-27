import React, {FC} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {cleanLog} from '../redux/actions/saveNumberActions';
import {useDispatch, useSelector} from 'react-redux';

interface ModalProps {
  openModal: boolean;
  closeModal:  () => void;
}
 
const ModalComponent: FC<ModalProps> = ({openModal, closeModal}) => {
  const dispatch = useDispatch();
  const showLog = useSelector(state => state.saveNumberRandom);
  console.log(showLog);

  const renderItem = ({item}) => {
    console.log(item);
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          width: '100%',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 30}}>{item.join(' - ')}</Text>
      </View>
    );
  };

  const handleClose = () => {
      // not sure if want clean the log after see it
    //dispatch(cleanLog());
    closeModal();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={openModal}
      onRequestClose={closeModal}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}>
        <View style={styles.modalView}>
          <TouchableOpacity
            onPress={handleClose}
            style={{padding: 5, width: '100%', height: 45}}>
            <Text style={{textAlign: 'right', color: '#134E9B', fontSize: 20}}>
              Close
            </Text>
          </TouchableOpacity>
          <FlatList
            contentContainerStyle={{paddingBottom: 30}}
            data={showLog.data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  width: '100%',
                  marginVertical: 10,
                  borderColor: '#134E9B',
                  borderWidth: 1,
                }}
              />
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  modalView: {
    width: '90%',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
});
