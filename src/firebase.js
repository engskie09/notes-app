import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig =
{
	apiKey: 'AIzaSyCvy9uKgahC7AmIhxfZnLcfdf3AfNe0_o4',
	authDomain: 'notes-app-c315d.firebaseapp.com',
	databaseURL: 'https://notes-app-c315d.firebaseio.com',
	projectId: 'notes-app-c315d',
	storageBucket: 'notes-app-c315d.appspot.com',
	messagingSenderId: '947641649250',
	appId: '1:947641649250:web:54e66c650d2fb5ff9c293b',
	measurementId: 'G-9LRTDSVZ7X'
}

let db = firebase.initializeApp(firebaseConfig)
db = db.firestore()
export default db