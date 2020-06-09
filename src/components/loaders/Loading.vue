<template>
	<div>
		<moon-loader></moon-loader>
	</div>
</template>
<script>
	import MoonLoader from "vue-spinner/src/MoonLoader.vue";
	export default {
		name: "Loading",
		props: [],
		data() {
			return {};
		},
		components: {
			MoonLoader
		}
	};
</script>