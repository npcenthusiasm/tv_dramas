<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden;"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>

</template>

<script>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted, watchEffect } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

export default {
  components: { Editor, Toolbar },
  defineEmits: ['updateEditorValue'],
  setup (props, { emit }) {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef()

    // 内容 HTML
    const valueHtml = ref('<p>hello</p>')

    // 模拟 ajax 异步获取内容
    onMounted(() => {
      setTimeout(() => {
        valueHtml.value = '<p>這是個世界各國都在檯面下進行激烈情報戰的時代，東國與西國，兩國之間已持續冷戰了十多年。隸屬於西國情報局間諜–黃昏，被指派一項機密任務，奉命接近威脅東西和平的危險人物，要刺探出東國國家統一黨黨魁─唐納文‧戴斯蒙德的戰爭計畫。任務內容是在一週內組好家庭並潛入戴斯蒙德兒子所就讀的名校。於是黃昏扮起精神科醫生─洛伊德‧佛傑開始組織家庭。然而他找到的女兒安妮亞是會讀心的超能力者，妻子約兒則是位暗殺者，由於利害一致，三人便互相隱瞞真實身分，並展開共同生活…</p>'
      }, 1500)
    })

    const toolbarConfig = {}
    const editorConfig = { placeholder: '请输入内容...' }

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const editor = editorRef.value
      if (editor == null) return
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      editor.destroy()
    })

    const handleCreated = (editor) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      editorRef.value = editor // 记录 editor 实例，重要！
    }

    watchEffect(() => valueHtml.value, () => {
      console.log('watchEffect')
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      emit('updateEditorValue', valueHtml.value)
    })

    return {
      editorRef,
      valueHtml,
      mode: 'default', // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated
    }
  }
}
</script>

<style>

</style>
