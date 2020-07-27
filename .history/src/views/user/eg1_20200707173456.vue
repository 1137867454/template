<template>
  <div class="height_100 eg1">
    <el-input size="small" style="width:200px;margin-right:20px;"></el-input>
	<el-button size="small">
		<i class="el-icon-search"></i>
	查询</el-button>
	<el-button type="success" @click="addVisible=false;" size="small">
		<i class="el-icon-circle-plus-outline"></i>
		添加</el-button>
	<el-button type="warning" @click="updateVisible=false;" size="small">
		<i class="el-icon-edit"></i>
		修改</el-button>
	<el-button type="danger" size="small">
		<i class="el-icon-delete"></i>
		删除</el-button>
    <!-- <div class="chest">
      <div class="heart left sided top"></div>
      <div class="heart center"></div>
      <div class="heart right sided"></div>
    </div> -->
    <el-table v-if="addVisible && updateVisible"
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="日期"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <el-form  style="margin-left:60px;"
        class="form refuseCopy" :rules="rules" ref="ruleForm"
        size="small" label-position="left"
        :model="user"
        label-width="80px"
      >
        <el-form-item label="姓名" prop="name">
          <el-input clearable
            v-model="user.name"
            style="width:200px"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-radio style="width:58px;"
            v-model="user.gender"
            label="1"
          >
            男
          </el-radio>
          <el-radio
            v-model="user.gender"
            label="2"
          >
            女
          </el-radio>
        </el-form-item>
        <!-- <el-form-item label-width="0">
          <el-upload ref="uploadAlbum"
            class="upload-demo"
            action="" style="width:280px;margin:-10px 0 10px;"
            :on-change="photoChange"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :auto-upload="false"
            list-type="picture">
            <el-button size="small" type="primary">图片上传</el-button>
            <div slot="tip" class="el-upload__tip" style="position:absolute;top:-16px;right:100px; ">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item> -->
            <!-- :before-upload="beforeUpload" -->
        <!-- <el-form-item label="学号"  prop="studentCode" :class="hideUpload?'age_margin_distance':''">
          <el-input clearable
            v-model="user.studentCode"
            style="width:200px"
            autocomplete="off"
          />
        </el-form-item> -->
        <!-- <el-form-item label="班级" prop="classInfo">
          <el-cascader
          v-model="user.classInfo"
          size="mini" style="width:200px;"
          :options="getOptions"
          clearable 
          placeholder="请选择班级"
          :props="{expandTrigger: 'hover'}"
        />
        </el-form-item> -->
        <el-form-item label="联系电话" prop="parentPhone">
          <el-input @keydown.native.enter="sda('ruleForm', user)"
            v-model="user.parentPhone" show-word-limit
            autocomplete="off" maxlength="11" clearable
            style="width:200px" 
          />
        </el-form-item>
        <el-form-item label-width="0" style="text-align:center;width:100%;">
          <el-button
            type="primary"
            @click="submit('ruleForm', user)"
          >
            确 定
          </el-button>
          <el-button @click="dialogVisible = false">
            取 消
          </el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
  name: 'eg1',
  data() {
    return {
		addVisible: true,
		updateVisible: true,
		user: {},
		rules:[],
		tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
    }
  },
  computed: {
    get_activeIndex() {
      return this.$store.getters.get_activeIndex;
    }
  },
  mounted() {
    // console.log(this.$router)
    // console.log(this.$route)
    // console.log(this.$store.getters.get_activeIndex)
  },
  methods: {
		toggleSelection(rows) {
			if (rows) {
				rows.forEach(row => {
				this.$refs.multipleTable.toggleRowSelection(row);
				});
			} else {
				this.$refs.multipleTable.clearSelection();
			}
		},
		handleSelectionChange(val) {
			this.multipleSelection = val;
		}
	}
}
</script>

<style scoped>
.eg1 {
  margin:0 8px;	
  text-align: left;

	/* background:#ffa5a5; */
}
.chest {
	width:500px;
	height:500px;
	margin:0 auto;
	position:relative;
}
.heart {
	position:absolute;
	z-index:2;
	background:linear-gradient(-90deg,#F50A45 0%,#d5093c 40%);
	animation:beat 2s ease 0s infinite normal;
}
.heart.center {
	background:linear-gradient(-45deg,#B80734 0%,#d5093c 40%);
}
.heart.top {
	z-index:3;
}
.sided {
	top:100px;
	width:220px;
	height:220px;
	border-radius:110px;
}
.center {
	width:210px;
	height:210px;
	bottom:100px;
	left:145px;
	transform:rotateZ(225deg);
}
.left {
	left:62px;
}
.right {
	right:62px;
}
@keyframes beat {
	0% {
	transform:scale(1) rotate(225deg);
	box-shadow:0 0 40px #d5093c;
}
50% {
	transform:scale(1.1) rotate(225deg);
	box-shadow:0 0 70px #d5093c;
}
100% {
	transform:scale(1) rotate(225deg);
	box-shadow:0 0 40px #d5093c;
}
}

</style>