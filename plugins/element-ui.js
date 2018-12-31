import Vue from 'vue'
import { DatePicker, TimeSelect } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

locale.use(lang)

export default () => {
    Vue.use(DatePicker, { locale })
    Vue.use(TimeSelect)
}