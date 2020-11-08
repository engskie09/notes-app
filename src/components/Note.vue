<template>
	<div class = 'd-flex justify-content-center'>
		<form>
			<div class = 'pb-4'>
				<button v-on:click = 'Note_Update' class = 'btn btn-success m-2' type = 'button'>Update</button>
				<button v-on:click = 'Note_Delete' class = 'btn btn-danger m-2' type = 'button'>Delete</button>
			</div>

			<div class = 'form-group'>
				<input v-on:change = 'Status_Update' class = 'form-check-input' type = 'checkbox' :checked = 'this.Note.Status'>
				<label class = 'form-check-label'>Mark as complete</label>
			</div>

			<div class = 'form-group'>
				<input v-on:keyup = 'Title_Update' class = 'form-control' placeholder = 'Title' type = 'text' :value = 'this.Note.Title'>
			</div>

			<div class = 'form-group'>
				<textarea v-on:keyup = 'Content_Update' class = 'form-control' placeholder = 'Content' :value = 'this.Note.Content'></textarea>
			</div>
		</form>
	</div>
</template>

<script>

import db from '@/firebase'

export default
{
	'name' : 'Note',
	'props': ['Note', 'Note_Select'],

	'methods':
	{
		Title_Update(set_Event)
		{
			this.Note.Title = set_Event.target.value
		},

		Content_Update(set_Event)
		{
			this.Note.Content = set_Event.target.value
		},

		Status_Update(set_Event)
		{
			this.Note.Status = set_Event.target.checked
		},

		Note_Update()
		{
			db.collection('Notes').doc(this.Note.Identity)
			.update({
						'Title'		:	this.Note.Title,
						'Content'	:	this.Note.Content,
						'Status'	:	this.Note.Status
			}).then(() =>
			{
				this.Note_Select()
				alert('Success')
			})
		},

		Note_Delete()
		{
			db.collection('Notes').doc(this.Note.Identity)
			.delete().then(() =>
			{
				this.Note_Select()
				alert('Success')
			})
		}
	},

	data()
	{
		return	{
					'Title'		:	'',
					'Content'	:	''
				}
	}
}

</script>

<style scoped>

.btn
{
	width : 80px;
}

</style>