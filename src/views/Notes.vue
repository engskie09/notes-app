<template>
	<div>
		<button v-on:click = 'Note_Add' type = 'button' class = 'btn btn-primary'>Add Note</button>
		<hr>
		<select v-on:change = 'Note_Filter' class = 'form-control' value = 'All'>
			<option value = 'All'>All</option>
			<option value = 'true'>Completed</option>
			<option value = 'false'>Incomplete</option>
		</select>
		<hr>
		<div id = 'qwe'>
		<div v-for = "Note in Notes" :key = 'Note.Identity'>
			<Note class = 'p-2' :Note = 'Note' v-bind:Note_Select = 'Note_Select' />
		</div></div>
	</div>
</template>

<script>

import Note from '@/components/Note.vue'
import db from "@/firebase"

export default
{
	'name'			:	'Notes',
	'components'	:	{ Note },

	created()
	{
		this.Note_Select()
	},

	'methods'		:
	{
		Note_Filter(set_Event)
		{
			this.Filter = set_Event.target.value == 'true' ? true : false
			this.Note_Select()
		},

		async Note_Select()
		{
			alert(this.Filter == 'All')
			if (this.Filter == 'All')
				db.collection('Notes').where('Email', '==', String(window.Email))
				.get().then(set_Data =>
				{
					let get_Data = []
					set_Data.forEach(set_Data =>
					{
						let get_Note = set_Data.data()
						get_Note.Identity = set_Data.id
						get_Data.push(get_Note)
					})

					console.log(get_Data)

					this.Notes = get_Data
				}).catch(set_Error =>
				{
					alert(set_Error)
				})
			else
				db.collection('Notes').where('Email', '==', String(window.Email))
				.where('Status', '==', this.Filter)
				.get().then(set_Data =>
				{
					let get_Data = []
					set_Data.forEach(set_Data =>
					{
						let get_Note = set_Data.data()
						get_Note.Identity = set_Data.id
						get_Data.push(get_Note)
					})

					console.log(get_Data)

					this.Notes = get_Data
				}).catch(set_Error =>
				{
					alert(set_Error)
				})
		},

		async Note_Add()
		{
			db.collection('Notes').add({ 'Email' : window.Email, 'Title' : '', 'Content' : '', 'Status' : false })
			.then(() =>
			{
				alert("Success")
				this.Note_Select()
			})
			.catch(set_Error =>
			{
				console.log(set_Error)
			})
		}
	},
	data()
	{
		return	{
					'Filter'	:	'All',
					'Notes'		:	[]
				}
	}
}

</script>