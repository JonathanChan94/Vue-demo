<template>
    <div>
        <table>
			<tr>
				<th>ID</th>
				<th>数据</th>
				<th>标签</th>
				<th>排序</th>
				<th>操作</th>
			</tr>
			<tr v-for="(item,index) in api">
				<td style="width:100px;">{{ index+1 }}</td>
				<td>
					<el-select v-model="value[index].id" @change="test(index)">
					    <el-option
					      v-for="api in apilist"
					      :label="api.name"
					      :value="api.id"
					      :selected="item.id==api.id?true:false">
					    </el-option>
					 </el-select>
				</td>
				<td>
					<el-select v-model="value[index].tagid" @change="test(index)">
					    <el-option
					      v-for="tag in tags"
					      :label="tag.name"
					      :value="tag.id"
					      :selected="item.tagid==tag.id?true:false">
					    </el-option>
					 </el-select>
				</td>
				<td>
					<el-input
					  v-bind:value="item.order">
					</el-input>
				</td>
				<td>
					<el-button
			          size="small"
			          type="info"
			          @click="">
			          保存修改
			        </el-button>
				</td>
			</tr>
		</table>
<!--         <el-table :data="api" style="width: 100%">
            <el-table-column type="index" width="50">
            </el-table-column>
            <el-table-column :label="数据">
                
            </el-table-column>
        </el-table> -->
    </div>
</template>
<style scoped>
table {
    width: 100%;
    font-size:14px;
}
th,td{
    padding:15px 10px;
}
th{
    background:#eff2f7;
}
tr:hover{
    background:#eff2f7;
}
</style>
<script>
export default {
    name: "data",
    data() {
        return {
            apilist: [{
                id: 1,
                name: '[1]IP地址'
            }, {
                id: 7,
                name: '[7]全国加油站油价'
            }, {
                id: 8,
                name: '[8]移动联通基站'
            }, {
                id: 11,
                name: '[11]手机号码归属地'
            }, {
                id: 15,
                name: '[15]经纬度地址解析'
            }, {
                id: 16,
                name: '[16]电信基站'
            }, {
                id: 18,
                name: '[18]全国WIFI'
            }, {
                id: 22,
                name: '[11]手机号码归属地'
            }, {
                id: 25,
                name: '[15]经纬度地址解析'
            }, {
                id: 27,
                name: '[16]电信基站'
            }, {
                id: 28,
                name: '[18]全国WIFI'
            }, {
                id: 30,
                name: '[11]手机号码归属地'
            }, {
                id: 31,
                name: '[15]经纬度地址解析'
            }, {
                id: 33,
                name: '[16]电信基站'
            }, {
                id: 36,
                name: '[18]全国WIFI'
            }],
            // tags:['无标签','最新上线','最新特惠','热门接口'],
            tags: [{
                id: 0,
                name: '无标签'
            }, {
                id: 1,
                name: '最新上线'
            }, {
                id: 2,
                name: '最新特惠'
            }, {
                id: 3,
                name: '热门接口'
            }],
            api: [{
                id: 8,
                name: '[8]移动联通基站',
                tagid: 1,
                order: 0
            }, {
                id: 15,
                name: '[15]经纬度地址解析',
                tagid: 1,
                order: 1
            }, {
                id: 18,
                name: '[18]全国WIFI',
                tagid: 0,
                order: 2
            }, {
                id: 16,
                name: '[16]电信基站',
                tagid: 2,
                order: 3
            }, {
                id: 1,
                name: '[1]IP地址',
                tagid: 2,
                order: 4
            }, {
                id: 7,
                name: '[7]全国加油站油价',
                tagid: 3,
                order: 5
            }],
            value: [{
                id: '',
                tagid: '',
                order: ''
            }, {
                id: '',
                tagid: '',
                order: ''
            }, {
                id: '',
                tagid: '',
                order: ''
            }, {
                id: '',
                tagid: '',
                order: ''
            }, {
                id: '',
                tagid: '',
                order: ''
            }, {
                id: '',
                tagid: '',
                order: ''
            }]
        }
    },
    watch: {
        'value': 'test'
    },
    methods: {
        test(index) {
            console.log(index, this.value[index].id, this.value[index].tagid, this.value[index].order);
        }
    }
}
</script>
