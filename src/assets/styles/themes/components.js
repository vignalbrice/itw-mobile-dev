import {StatusBar, StyleSheet} from 'react-native';
import colors from './colors';
import constants from '@constants/index';

export default StyleSheet.create({
  viewCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  viewFlex: {
    flex: 1,
    backgroundColor: colors.white,
  },
  viewJustifyBetween: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  headerWrapper: {
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.2,
  },
  headerDetail: {
    paddingTop: StatusBar.currentHeight + 80,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subHeaderDetail: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  headerDetailTitle: {
    fontSize: 20,
    color: colors.darkgray,
    fontFamily: 'Montserrat-Regular',
  },
  launchDate: {
    marginTop: 15,
    marginBottom: 8,
    fontSize: 16,
    color: '#333',
    fontFamily: 'Montserrat-Regular',
  },
  blackRegularText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Montserrat-Regular',
    marginBottom: 8,
  },
  button: {
    height: 50,
    marginTop: 20,
    borderRadius: 4,
    backgroundColor: colors.main,
    justifyContent: 'center',
    alignItems: 'center',
    width: constants.width / 2,
  },
  btnText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: '700',
    fontFamily: 'Montserrat-Regular',
  },
  blackMdText: {
    fontFamily: 'Montserrat-SemiBold',
  },
  searchBarWrapper: {
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 255, 255)',
    width: constants.width / 1.1,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    position: 'absolute',
    top: constants.height / 15,
    elevation: 3,
    borderRadius: 5,
  },
  searchBarInput: {
    marginRight: 5,
    padding: 5,
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pRight10: {
    paddingRight: 10,
  },
  headerWrapper: {
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.2,
  },
  missionItem: {
    width: constants.width / 1.1,
    marginVertical: 15,
    height: 280,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.mediumgray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  missionImage: {
    width: '100%',
    height: 250,
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightgray,
  },
  missionBottomWrapper: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  missionTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
  roomText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    marginTop: 10,
  },
  loadingTitle: {
    fontSize: 25,
    fontFamily: 'Montserrat-Bold',
    marginTop: 10,
  },
  backText: {
    fontSize: 20,
    color: '#333',
    fontFamily: 'Montserrat-Medium',
    marginHorizontal: 10,
  },
  loadingView: {
    flex: 1,
  },
  errorText: {
    color: '#e74c3c',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
  },
  shipView: {
    backgroundColor: colors.lightgray,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderTopColor: '#333',
  },
  contentDetailView: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 40,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
