import { StyleSheet} from 'react-native';

const MARGIN = 5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
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
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  foodLine: {
    height: 100,
    borderColor: 'rgba(0,0,0,0.8)',
    flexDirection: 'row',
    marginLeft: MARGIN,
    marginRight: MARGIN,
    shadowColor: '#000',
    backgroundColor: '#a5d6a7',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    marginBottom: 4,
    elevation: 2,
    borderRadius: 2
  },
  foodDesc: {
    flex: 1,
    marginLeft: 10,
    marginTop: 5
  },
  foodHeadline: {
    color: '#000',
    opacity: 1,
    fontSize: 25,
  },
  foodText: {
    color: '#000',
    opacity: 0.5,
  },
  foodSelect: {
    flex: 1,
  }
});

export default styles