import Vue from 'vue'
import {format } from 'date-fns'

Vue.filter('formatDate', value => {
    return format(value, 'DD/MM/YYYY')
})

Vue.filter('formatTime', value => {
    return format(value, 'HH:mm')
})

