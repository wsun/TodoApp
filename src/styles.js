import {
  StyleSheet,
} from 'react-native';

export const constants = {
  mainColor: '#094AB2',
  backgroundColor: '#F6F6F6',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  /* header */
  navbar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row',
  },
  navbarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: '500',
  },
  statusbar: {
    backgroundColor: '#fff',
    height: 22,
  },

  /* input */
  inputContainer: {
    padding: 10,
    paddingBottom: 0,
    backgroundColor: constants.backgroundColor,
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: 'white',
  },

  /* todolist */
  todolist: {
    padding: 10,
    backgroundColor: constants.backgroundColor,
    flex: 1,
  },

  /* todo */
  row: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  text: {
    color: '#333',
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
  },

  /* button */
  actionText: {
    color: constants.mainColor,
    fontSize: 16,
    textAlign: 'center',
  },
  action: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderWidth: 1,
    padding: 10,
  },

  /* footer */
  footer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: constants.backgroundColor,
  },
});
