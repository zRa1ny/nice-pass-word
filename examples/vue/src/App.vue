<template>
    <div class="input-group style1">
        <nice-password :type="type" v-model="value" placeholder="请输入密码" />
        <div class="toggle-icon">
            <!-- 谷歌风格的睁眼图标 -->
            <svg v-if="isOpen" @click="setType('password')" class="eye-open eye-icon" width="24" height="24"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
                    fill="#5F6368" />
                <circle cx="12" cy="12" r="3" fill="#5F6368" />
            </svg>

            <!-- 谷歌风格的闭眼图标 -->
            <svg v-else @click="setType('text')" class="eye-closed eye-icon" width="24" height="24" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
                    fill="#5F6368" />
            </svg>
        </div>
    </div>
    <div class="input-group style2">
        <nice-password :type="type" v-model="value" />
        <div class="toggle-icon">
            <!-- 谷歌风格的睁眼图标 -->
            <svg v-if="isOpen" @click="setType('password')" class="eye-open eye-icon" width="24" height="24"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
                    fill="#5F6368" />
                <circle cx="12" cy="12" r="3" fill="#5F6368" />
            </svg>

            <!-- 谷歌风格的闭眼图标 -->
            <svg v-else @click="setType('text')" class="eye-closed eye-icon" width="24" height="24" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
                    fill="#5F6368" />
            </svg>
        </div>
    </div>
    <code class="code-block">
        {{ '<nice-password :type="type" v-model="value" placeholder="请输入密码" />' }}
    </code>
    <div>
        <input class="inputValue" type="text" v-model="inputValue">
        <button class="btn" @click="updateValue">更新</button>
    </div>

</template>
<script setup>
import { computed, ref } from 'vue'
import NicePassword from 'nice-pass-word/vue'
const value = ref()
const inputValue = ref("haha")
const type = ref("text")

const isOpen = computed(() => type.value === 'text', [type])
const setType = (t) => type.value = t
const updateValue = () => value.value = inputValue.value
</script>
<style>
.input-group.style1 {
    position: relative;
    margin-bottom: 30px;
}

.input-group.style1 input {
    box-sizing: border-box;
    width: 100%;
    padding: 15px 50px 15px 20px;
    border: 1px solid #dadce0;
    border-radius: 8px;
    font-size: 16px;
    transition: border 0.2s;
    outline: none;
    height: 56px;
}

.input-group.style1 input:focus {
    border: 2px solid #1a73e8;
}

.input-group.style1 .toggle-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.input-group.style1 .toggle-icon:hover {
    background: rgba(66, 133, 244, 0.1);
}

.input-group.style1 .toggle-icon svg {
    transition: all 0.3s ease;
}

/* 谷歌原生风格图标动画 */
.input-group.style1 .eye-icon {
    transition: all 0.35s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.input-group.style1 .eye-open {
    opacity: 1;
    transform: scale(1);
}

.input-group.style1 .eye-closed {
    transform: scale(0.8);
}

.input-group.style1 .toggle-icon.active .eye-open {
    opacity: 0;
    transform: scale(0.8);
}

.input-group.style1 .toggle-icon.active .eye-closed {
    opacity: 1;
    transform: scale(1);
}
</style>
<style>
.input-group.style2 {
    position: relative;
    margin-bottom: 30px;
}

.input-group.style2 input {
    box-sizing: border-box;
    width: 100%;
    padding: 18px 55px 18px 25px;
    border: none;
    border-radius: 15px;
    font-size: 16px;
    line-height: 16px;
    transition: all 0.3s ease;
    background: #f0f4f8;
    box-shadow:
        inset 3px 3px 6px rgba(0, 0, 0, 0.08),
        inset -3px -3px 6px rgba(255, 255, 255, 0.8),
        0 4px 10px rgba(0, 0, 0, 0.1);
    outline: none;
}

.input-group.style2 input:focus {
    box-shadow:
        inset 3px 3px 6px rgba(0, 0, 0, 0.05),
        inset -3px -3px 6px rgba(255, 255, 255, 0.9),
        0 4px 15px rgba(106, 17, 203, 0.3);
}

.input-group.style2 .toggle-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #f0f4f8;
    box-shadow:
        3px 3px 6px rgba(0, 0, 0, 0.1),
        -3px -3px 6px rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
}

.input-group.style2 .toggle-icon:hover {
    box-shadow:
        inset 3px 3px 6px rgba(0, 0, 0, 0.1),
        inset -3px -3px 6px rgba(255, 255, 255, 0.8);
}

.input-group.style2 .toggle-icon svg {
    width: 20px;
    height: 20px;
    transition: all 0.3s ease;
}

.input-group.style2 .eye-icon {
    transition: all 0.35s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.input-group.style2 .eye-open {
    transform: scale(1);
}

.input-group.style2 .eye-closed {
    transform: scale(0.8);
}

.input-group.style2 .toggle-icon.active .eye-open {
    opacity: 0;
    transform: scale(0.8);
}

.input-group.style2 .toggle-icon.active .eye-closed {
    opacity: 1;
    transform: scale(1);
}
</style>

<style>
.inputValue {
    box-sizing: border-box;
    width: 100%;
    padding: 15px;
    border: 1px solid #dadce0;
    border-radius: 8px;
    font-size: 16px;
    transition: border 0.2s;
    outline: none;
}

.btn {
    display: inline-block;
    background: #2575fc;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s;
    margin: 5px;
}

.code-block {
    display: block;
    background: #2d2d2d;
    color: #f8f8f2;
    padding: 15px;
    border-radius: 5px;
    font-family: 'Courier New', monospace;
    overflow-x: auto;
    margin: 15px 0;
    font-size: 0.9rem;
}
</style>
