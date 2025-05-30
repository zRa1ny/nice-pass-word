<template>
    <input ref="input" />
</template>

<script setup>
import { ref, onMounted, defineProps, watchEffect, toRefs } from 'vue'
import NicePassword from 'nice-pass-word'
const props = defineProps({
    modelValue: String,
    type: String,
    pattern: RegExp,
    symbol: String,
    callback: Function
})
const emit = defineEmits(['update:modelValue'])
const input = ref(null)
const value = ref(props.modelValue)
let instance = null
onMounted(() => {
    input.value.value = value.value || ""
    instance = new NicePassword(input.value,
        Object.assign(
            {
                type: props.type,
                pattern: props.pattern,
                symbol: props.symbol,
                callback: function () {
                    value.value = this.value;
                    emit("update:modelValue", this.value);
                    props.callback?.apply(this)
                }
            })
    )
})

watchEffect(() => {
    if (value.value != props.modelValue) {
        value.value = props.modelValue;
        instance?.$setValue(value.value);
    }
}, [props.value])

watchEffect(() => {
    instance?.$setType(props.type);
}, [props.type])
</script>