/**
 * Vue component class.
 *
 * @name 			crud-editor
 * @project 	p17-0008-tribe-manager-app
 * @author 		Christian Blaschke <mail@platdesign.de>
 * @since			September 21st 2017, 5:39:17 pm
 */

import Toolbar from '../toolbar';
import Btn from '../btn';
import BtnCircle from '../btn-circle';
import List from '../list';
import ListItem from '../list/list-item';
import Search from '../search';

import rx from 'rx';

import 'vue-awesome/icons/pencil-square-o';
import 'vue-awesome/icons/trash-o';
import 'vue-awesome/icons/floppy-o';
import 'vue-awesome/icons/plus';
import 'vue-awesome/icons/times';

export default {

	name: 'zue-crud-editor',

	components: {
		Toolbar,
		Btn,
		BtnCircle,
		List,
		ListItem,
		Search
	},

	props: {
		label: {
			type: Array,
			required: true
		},
		icon: {
			type: String,
			default: 'pencil-square-o'
		},

		rawData: {
			type: Array
		},

		dataObservable: {
			type: rx.Observable
		},

		onCreate: {
			type: Function,
			required: true
		},

		onUpdate: {
			type: Function,
			required: true
		},

		onDelete: {
			type: Function,
		},

		onDelete: {
			type: Function
		},

		createItemHaystack: {
			type: Function,
			default: () => ''
		},

		defaultModel: {
			type: Object,
			default: () => {}
		},

		deleteConfirmMessage: {
			type: String,
			default: 'Wirklich löschen?'
		}
	},


	data() {
		return {
			searchQuery: null,
			newModel: null,
			updateModel: null,
			deletingModel: null
		}
	},

	subscriptions() {
		return {
			data: this.watch$('isListVisible')
				.filter(Boolean)
				.switchMap(() => {
					if(this.dataObservable) {
						return this.dataObservable;
					} else {
						this.$emit('reload-data');
						return this.watch$('rawData')
							.filter(Array.isArray);
					}
				})
				.startWith([])
		}
	},

	methods: {
		showList() {
			this.newModel = null;
			this.updateModel = null;
		},

		resetNewModel() {
			this.newModel = Object.assign({}, this.defaultModel);
		},
		openCreateEditor() {
			this.showList();
			this.resetNewModel();
		},
		openModelEditor(model) {
			this.updateModel = Object.assign({}, this.defaultModel, model);
		},

		async saveNewModel() {
			await this.onCreate(this.newModel);
			this.showList();
		},

		async saveUpdateModel() {
			await this.onUpdate(this.updateModel);
			this.showList();
		},

		async deleteModel(model) {
			this.deletingModel = model;
			await this.onDelete(model);
			let index = this.data.indexOf(model);
			this.data.splice(index, 1);
			this.deletingModel = null;
			this.showList();
		}
	},


	computed: {
		isListVisible() {
			return !!!this.newModel && !!!this.updateModel;
		}
	}



}
