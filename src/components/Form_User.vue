<template>
	<div class = 'd-flex justify-content-center'>
		<form @submit.prevent = 'pressed'>
			<div class = 'form-group'>
				<input class = 'form-control' v-model = 'Email' placeholder = 'Email' type = 'email'>
			</div>

			<div class = 'form-group'>
				<input class = 'form-control' v-model = 'Password' placeholder = 'Password' type = 'password'>
			</div>
			<button type = 'submit' class = 'btn btn-primary'>Submit</button>
		</form>
	</div>
</template>

<script>

import * as firebase from 'firebase/app'
import 'firebase/auth'

export default
{
	'name'		:	'Form_User',
	'methods'	:
	{
		async pressed()
		{
			if (this.$route.name == 'Register')
			{
				firebase.default.auth().createUserWithEmailAndPassword(this.Email, this.Password)
				.then(set_Data =>
				{
					alert('Success, Login now...')
					console.log(set_Data)
					firebase.default.auth().signOut()
					this.$router.replace({ 'name' : 'Home'})
				})
				.catch(set_Error =>
				{
					console.log(set_Error)
				})
			}

			else
			{
				firebase.default.auth().signInWithEmailAndPassword(this.Email, this.Password)
				.then(set_Data =>
				{
					console.log(set_Data)
					alert('Success...')
					this.$router.replace({ 'name' : 'Notes'})
				})
				.catch(set_Error =>
				{
					console.log(set_Error)
					alert(set_Error.message)
				})
			}
		}
	},

	data()
	{
		return	{
					'Email'		:	'',
					'Password'	:	''
				}
	}
}

</script>