<template>
	<div id = 'nav'>
		<router-link to = '/'> Home </router-link>
		<router-link v-if = '!Session' to = '/Login'> Login </router-link>
		<router-link v-if = '!Session' to = '/Register'> Register </router-link>
		<router-link v-if = 'Session' to = '/Notes'> Notes </router-link>
		<a v-if = 'Session' v-on:click = 'Logout' href = '#'> Logout({{ Email }})</a>
	</div>
</template>

<script>

import * as firebase from 'firebase/app'
import 'firebase/auth'

export default
{
	'name' : 'Header',

	created()
	{
		firebase.default.auth().onAuthStateChanged(set_Data => 
		{
			if (set_Data)
			{
				this.Session = true
				this.Email = set_Data.email
				window.Email = this.Email
				window.UID = set_Data.uid
			}

			else
				this.Session = false
		});
	},

	data()
	{
		return { 'Session' : false }
	},

	'methods' :
	{
		async Logout ()
		{
			firebase.default.auth().signOut()
			.then(() =>
			{
				this.$router.replace({ 'name' : 'Home'})
				alert('Logout Success...')
			})
			.catch(set_Error =>
			{
				console.log(set_Error)
			})
		}
	}
}

</script>