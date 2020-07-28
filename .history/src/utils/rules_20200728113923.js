import i18n from '../lang/index'
const rules = {
    name: { required: true, message: i18n.t('m.rules.name'), trigger: 'blur'},
    userName: { required: true, message: i18n.t('m.rules.account'), trigger: 'blur'},
    password: { required: true, message: i18n.t('m.rules.account'), trigger: 'blur'},
    role: { required: true, message: i18n.t('m.rules.roleName'), trigger: 'blur'},
    sex: { required: true, message: i18n.t('m.rules.account'), trigger: 'blur'},
    oldPassword: { required: true, message: i18n.t('m.rules.oldPassword'), trigger: 'blur'},
    newPassword: { required: true, message: i18n.t('m.rules.newPassword'), trigger: 'blur'},
    jobNumber: { required: true, message: i18n.t('m.rules.jobNumber'), trigger: 'blur'},
    company: { required: true, message: i18n.t('m.rules.company'), trigger: 'blur'},
    corporationId: { required: true, message: i18n.t('m.rules.company'), trigger: 'blur'},
    phone: { required: true, message: i18n.t('m.rules.phone'), trigger: 'blur'},
    chargeMan: { required: true, message: i18n.t('m.rules.chargeMan'), trigger: 'blur'},
    departmentName: { required: true, message: i18n.t('m.rules.department'), trigger: 'blur'},
    departmentId: { required: true, message: i18n.t('m.rules.department'), trigger: 'blur'},
    // departmentDesc: { required: true, message: i18n.t('m.rules.department'), trigger: 'blur'},
    address: { required: true, message: i18n.t('m.rules.address'), trigger: 'blur'},
    deviceNmae: { required: true, message: i18n.t('m.rules.deviceNmae'), trigger: 'blur'},
    macAddress: { required: true, message: i18n.t('m.rules.macAddress'), trigger: 'blur'},
    // phone: { required: true, message: '联系方式为必填项', trigger: 'blur'},
  };
  export default rules