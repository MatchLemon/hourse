<template>
	<el-form ref="hProperty" :model="hProperty" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
		<el-form-item label="房产标题">
			<el-input v-model="hProperty.name"></el-input>
		</el-form-item>

		<el-form-item label="房屋照片">
			<el-input v-model="hProperty.pic"></el-input>
		</el-form-item>

		<el-form-item label="租售">
			<el-radio-group v-model="hProperty.sellWay">
				<el-radio label="出租" value="rent" ></el-radio>
				<el-radio label="出售" value="sell" ></el-radio>
			</el-radio-group>
		</el-form-item>

		<el-form-item label="租售单价">
			<el-input v-model="hProperty.unitPrice"></el-input>
		</el-form-item>

		<el-form-item label="房屋面积">
			<el-input v-model="hProperty.area"></el-input>
		</el-form-item>

		<el-form-item label="房屋地址">
			<el-input v-model="hProperty.addr"></el-input>
		</el-form-item>

		<el-form-item label="联系电话">
			<el-input v-model="hProperty.phone"></el-input>
		</el-form-item>

		<el-form-item label="交易状态">
			<el-select v-model="hProperty.status" placeholder="请选择状态">
				<el-option label="已打电话" value="beijing"></el-option>
				<el-option label="交易中" value="shanghai"></el-option>
				<el-option label="已付款" value="shanghai"></el-option>
				<el-option label="已完成" value="shanghai"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="是否公开">
			<el-radio-group v-model="hProperty.isPublic">
				<el-radio label="是" value="1" ></el-radio>
				<el-radio label="否" value="0" ></el-radio>
			</el-radio-group>
		</el-form-item>
		<el-form-item label="添加图片">
			<el-radio-upload>

			</el-radio-upload>
		</el-form-item>
		<el-form-item label="房屋详细信息">
			<el-input type="textarea" v-model="hProperty.desc"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary">立即创建</el-button>
			<el-button @click.native.prevent>取消</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	export default {
		data() {
			return {
				hProperty: {
					name: '',
					pic: '',
					unitPrice: '',
					area: '',
					addr: '',
					phone: '',
					status: '',
					desc: '',
					sellWay: ''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			}
		}
	}

</script>