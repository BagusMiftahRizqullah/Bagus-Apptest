import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Themes';

export default StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 13,
    paddingLeft: 13,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#006885',
  },
  borderBox: {
    elevation: 1,
    height: 1,
    backgroundColor: '#006885',
  },
  navInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowBack: {
    width: 28,
    height: 28,
  },
  navText: {
    fontFamily: '#000000',
    fontSize: 14,
    lineHeight: 14,
    color: '#D3D3D3',
    marginLeft: 13,
  },
  moreSetting: {
    width: 20,
    height: 20,
  },
  descTitle: {
    fontSize: 10,
    lineHeight: 13,
    color: '#D3D3D3',
    width: 300,
    marginTop: 10,
    marginLeft: 13,
  },
});
