import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './NavNavigateStyle';

const NavNavigate = ({
  onPress,
  text,
  moreSetting,
  more,
  desc,
  disableButton,
}) => {
  return (
    <View>
      <View style={styles.navContainer}>
        <View style={styles.navInfo}>
          {disableButton ? null : (
            <TouchableOpacity onPress={onPress}>
              <Image
                source={require('@images/back-arrow.png')}
                style={styles.arrowBack}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
          <View>
            <Text style={styles.navText}>{text}</Text>
            {desc != null ? <Text style={styles.descTitle}>{desc}</Text> : null}
          </View>
        </View>
      </View>
      <View style={styles.borderBox} />
    </View>
  );
};

export default NavNavigate;
