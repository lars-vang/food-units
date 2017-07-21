import { StyleSheet} from 'react-native';

const MARGIN = 5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    marginBottom: 20
  },
  dropdown_4: {
     alignSelf: 'flex-end',
    width: 150,
    top: 10,
    right: 8,
  },
  dropdown_4_dropdown: {
    width: 150,
    height: 300,
    borderRadius: 3,
  },
  dropdown_4_text: {
    marginVertical: 2,
    marginHorizontal: 0,
    marginRight: 10,
    fontSize: 18,
    color: '#000',
    textAlign: 'right',
    textAlignVertical: 'center',
  },
  foodLine: {
    height: 60,
    backgroundColor: '#fff',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingTop: 5,
  },
  foodDesc: {
    flex: 1,
    marginLeft: 5,
    marginTop: 5
  },
  foodImageContainer: {
    width: 50,
    marginLeft: 5
  },
  foodImage: {
    marginTop: 5,
    width: 40, 
    height: 40,
    tintColor: '#00897b'
  },
  foodImageWarning: {
    marginTop: 5,
    width: 40, 
    height: 40,
    tintColor: '#fb8c00'
  },
   foodImageLimit: {
    marginTop: 5,
    width: 40, 
    height: 40,
    tintColor: '#e53935'
  },
  foodHeadline: {
    color: '#000',
    opacity: 1,
    fontSize: 16,
  },
  foodText: {
    color: '#000',
    opacity: 0.5,
  },
  foodSelect: {
    flex: 1,
  },
  resetBotton: {
    marginTop: 10,
    marginLeft: MARGIN,
    marginRight: MARGIN,
  },
});

export default styles