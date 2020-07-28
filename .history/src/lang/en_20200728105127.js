
export const m = {
    login: {
      introduction: 'welcome to my system',
      name_holder: 'Username',
      password_holder: 'Password',
      name_tip: 'Please enter the username',
      password_tip: 'Please enter the password',
      remember: 'Remember Me',
      forget: 'Forgot Password',
      login: 'Login'
    },
    header: {
      home: 'Home',
      sayHi: 'Hi',
      logout: 'Logout',
      mjk: 'MJK',
      language: 'language Switching',
      infoUpdate: 'Info Update',
      deviceAdd: 'Device addition',
      addContinue: 'Continue to add',
      accountAdd: 'Account Addition',
      roleAdd: 'Role Addition',
      companyAdd: 'Company Addition',
      departmentAdd: 'Department Addition',
      leaderAdd: 'Leader Addition',
      staffAdd: 'Staff Addition',
    },
    menu: {
      project: 'Projects',
      notes: 'Notes',
      about: 'About',
      weather: 'Weather',
      cube: 'Cube',
      authority: 'Authority'
    },
    button: {
      add: 'Add',
      delete: 'Deletes',
      update: 'Update',
      select: 'Select',
      export: 'Export',
      import: 'Import',
      confirm: 'Confirm',
      cancel: 'Cancel'
    },
    rules: {        // form表单的格式错误语句
      account: 'username is required',
      password: 'password is required',
      oldPassword: 'Please enter current password',
      newPassword: 'Please enter a new password',
      name: 'name is required',
      roleName: 'roleName is required',
      gender: 'gender is required',
      company: 'company is required',
      address: 'address is required',
      phone: '联系方式为必填项',
      chargeMan: '负责人为必填项',
      department: '部门名称为必填项',
      jobNumber: '工号为必填项',
      deviceNmae: '设备名称为必填项',
      macAddress: 'Mac地址为必填项'
    },
    label: {        //input框前的概括
      oldPassword: 'OldPassword',
      newPassword: 'NewPassword',
      deviceName: 'DeviceName',
      macAddress: 'MacAddress',
      description: 'Description',
      name: 'Name',
      username: 'Username',
      password: 'Password',
      department: 'Department',
      company: 'Company',
      role: 'RoleName',
      address: 'Address',
      phone: 'Phone',
      principal: 'ChargeMan',
      alias: 'Alias',
      gender: 'Gender',
      job: 'Occupation',
      jobNumber: 'JobNumber',
      family: 'Family',
      male: 'Male',
      female: 'Female',
      uploadImg: 'Upload Image',
      uploadMessage: 'Only JPG / PNG files can be uploaded, and no more than 500K'
    },
    placeholder: { // input框 中英文切换
      name: 'Query by name',
      roleName: 'Query by roleName',
      roleName2: 'Please select',
      account: 'Query by account',
      username: 'Please enter the account',
      password: 'Please enter the password',
      operation: 'Query by operation',
      corporation: 'Query by corporation',
      corporation2: 'Please select a company',
      department: 'Query by department',
      department2: 'Please select a department',
      nameOrPhone: 'Query by name or phone',
      nameOrMac: 'name or Mac',
      startTime: 'startTime',
      endTime: 'endTime'
    },
    router: {
      login: 'Login',                   // 登录
      home: 'Home',                     // 主页
      systemManage: 'System',           // 系统管理 一级路由
      account: 'Account',               //    账号管理  二级路由  
      role: 'Role',                     //    角色管理  二级路由
      log: 'Log',                       //    日志管理  二级路由
      corporationManage: 'Corporation', // 公司管理 一级路由
      corporation: 'Company',        //     公司管理 二级路由
      department: 'Department',         //     部门管理 二级路由         
      leader: 'Leader',                 //     领导管理 二级路由
      staff: 'Staff',                   //     员工管理 二级路由
      attendanceManage: 'Attendance',   // 考勤管理 一级路由
      attendance: 'Records',         //     考勤管理 二级路由
      deviceManage: 'Device',           // 设备管理 一级路由
      device: 'Management',             //      设备管理 二级路由
    }
  }