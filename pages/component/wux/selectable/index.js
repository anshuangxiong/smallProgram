import baseComponent from '../helpers/baseComponent'
import classNames from '../helpers/classNames'
import { isPresetColor } from '../helpers/colors'

baseComponent({
    externalClasses: ['wux-input-class'],
    properties: {
        prefixCls: {
            type: String,
            value: 'wux-selectable',
        },
        type: {
            type: String,
            value: 'checkbox',
        },
        value: {
            type: String,
            value: '',
        },
        defaultChecked: {
            type: Boolean,
            value: false,
        },
        checked: {
            type: Boolean,
            value: false,
            observer(newVal) {
                if (this.data.controlled) {
                    this.updated(newVal)
                }
            },
        },
        disabled: {
            type: Boolean,
            value: false,
        },
        color: {
            type: String,
            value: 'balanced',
            observer(newVal) {
                this.setData({
                    inputColor: isPresetColor(newVal),
                })
            },
        },
        controlled: {
            type: Boolean,
            value: false,
        },
        wrapStyle: {
            type: String,
            value: '',
        },
    },
    data: {
        inputChecked: false,
        inputColor: '',
    },
    computed: {
        classes() {
            const { prefixCls, inputChecked, disabled } = this.data
            const wrap = classNames(prefixCls, {
                [`${prefixCls}--checked`]: inputChecked,
                [`${prefixCls}--disabled`]: disabled,
            })
            const input = `${prefixCls}__input`
            const icon = `${prefixCls}__icon`

            return {
                wrap,
                input,
                icon,
            }
        },
    },
    methods: {
        updated(inputChecked) {
            if (this.data.inputChecked !== inputChecked) {
                this.setData({
                    inputChecked,
                })
            }
        },
        onChange() {
            const { value, inputChecked, disabled, controlled } = this.data
            const item = {
                checked: !inputChecked,
                value,
            }

            if (disabled) return

            if (!controlled) {
                this.updated(!inputChecked)
            }

            this.triggerEvent('change', item)
        },
    },
    attached() {
        const { defaultChecked, checked, controlled } = this.data
        const inputChecked = controlled ? checked : defaultChecked
        const inputColor = isPresetColor(this.data.color)

        this.setData({
            inputChecked,
            inputColor,
        })
    },
})
