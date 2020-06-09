<template>
	<div class="container">
		<div class="wrapper">
			<SearchBox />
			<WeeklyTabs />
			<HourlyTab />
		</div>
	</div>
</template>
<script>
	import SearchBox from "../components/SearchBox";
	import WeeklyTabs from "../components/WeeklyTabs/WeeklyTabs";
	import HourlyTab from "../components/HourlyTab/HourlyTab";
	export default {
		name: "App",
		components: {
			SearchBox,
			WeeklyTabs,
			HourlyTab
		}
	};
</script>
<style>
</style>