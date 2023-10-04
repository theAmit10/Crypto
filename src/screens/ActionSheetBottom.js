import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Modal from 'react-native-modal';

const ActionSheetBottom = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View
      style={{
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className="flex-1">
      <Text style={{color: 'pink'}}>ActionSheetBottom FROM Toast</Text>
      <Button title="More actions" onPress={() => setVisible(true)} />
      <Modal
        animationIn={'slideInUp'}
        style={{width: '100%', marginLeft: 0, marginBottom: 0}}
        isVisible={visible}
        onTouchCancel={() => {
          setVisible(false);
        }}
        onBackButtonPress={() => {
          setVisible(false);
        }}>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            bottom: 0,
            bottom: 0,
            backgroundColor: 'white',
            width: '100%',
            height: 200,
            borderTopRightRadius: 20,
            borderTopLeftRadius:20
          }}></View>
      </Modal>
    </View>
  );
};

export default ActionSheetBottom;

const styles = StyleSheet.create({});
