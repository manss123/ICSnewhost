<template>
<div>
		<drag class="drag" :transfer-data="scopedData">
			<template slot-scope="props">
				<div v-if="props.transferData">
					{{ props.transferData.dragText }}
				</div>
				<div v-else>drag me</div>
			</template>
		</drag>
		<drop class="drop green" @drop="handleDrop">
			<template slot-scope="props">
				<div class="drag" v-if="props.transferData">
					{{ props.transferData.dropText }}
				</div>
			</template>
		</drop>
	</div>
</template>

<script>
import firebase from 'firebase'
import Vue from 'vue';
import { Drag, Drop } from 'vue-drag-drop';
import { Draggable } from '@shopify/draggable';
const draggable = new Draggable(document.querySelectorAll('ul'), {
  draggable: 'li'
});

draggable.on('drag:start', () => console.log('drag:start'));
draggable.on('drag:move', () => console.log('drag:move'));
draggable.on('drag:stop', () => console.log('drag:stop'));
	export default {
		components: { Drag, Drop },
		methods: {
			handleDrop(data) {
				alert(`You dropped with data: ${JSON.stringify(data)}`);
			},
		},
		computed: {
			scopedData: () => ({
				dragText: 'scoped drag',
				dropText: 'scoped drop',
			}),
		},
	};
</script>

<style>
.drop {
		padding: 10px;
        color: aliceblue;
	}
</style>
