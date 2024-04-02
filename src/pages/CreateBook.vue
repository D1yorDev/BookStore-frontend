<script>
import {mapActions,mapGetters} from "vuex";

export default {
	name: "CreateBook",
	computed: {
		...mapGetters(["getCategories", "getMedia"]),
	},
	data() {
		return {
			form: {
				name: "",
				description: "",
				text: "",
				category: "",
				
			},
			files: '',
		};
	},
	methods: {
		...mapActions(["pushKitob", 'pushFile']),
		kitob() {
			const formData = new FormData();
			formData.append("file", this.file);
			const bookData = {
				name: this.form.name,
				description: this.form.description,
				text: this.form.text,
				category: this.form.category,
			};
			if (this.file) {
				this.pushFile(formData)
						.then((response) => {
							console.log(response);
							bookData.picture = this.getMedia;
							return this.pushKitob(bookData);
						})
						.then(() => {
							this.$router.push("/");
						})
						.catch((error) => {
							console.log(error);
						});
				console.log("media");
			} else {
				this.pushKitob(bookData)
						.then((response) => {
							console.log(response);
						})
						.then(() => {
							this.$router.push("/");
						})
						.catch((error) => {
							console.log(error);
						});
				console.log("book");
			}
		},
		
		handleFileUpload() {
			this.file = this.$refs.file.files[0];
		}
		
		
	}
	
};
</script>

<template>
	<form class="col-6" @submit.prevent="kitob">
		<div class="mb-3">
			<label class="form-label" for="exampleInputName1">Name</label>
			<input id="exampleInputEmail1" v-model="form.name" class="form-control" type="text">
		</div>
		<div class="mb-3">
			<label class="form-label" for="exampleInputDescription11">Description</label><br>
			<input id="exampleInputDescription1" v-model="form.description" class="form-label" type="text"><br>
		</div>
		<div class="mb-3">
			<label class="form-label" for="exampleInputText1">Text</label><br>
			<input id="exampleInputDescription1" v-model="form.text" class="form-label" type="text"><br>
		</div>
		<div class="mb-3">
			<label class="form-label" for="exampleSelect">Category</label>
			<select v-model="form.category" aria-label="Default select example" class="form-select">
				<option value="/api/categories/1">Detektiv</option>
				<option value="/api/categories/2">Fantastik</option>
				<option value="/api/categories/3">Historical</option>
				<option value="/api/categories/4">Romantic</option>
			</select>
		</div>
		<div class="mb-3">
			<label class="form-label text-black" for="file">File</label>
			<input
					id="file"
					ref="file"
					class="form-control"
					type="file"
					@change="handleFileUpload()"
			/>
		</div>
		
		<button class="btn btn-primary mb-4" type="submit">Kiritish</button>
	</form>
</template>

<style scoped>

</style>
