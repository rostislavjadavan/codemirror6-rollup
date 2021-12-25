import { EditorState, basicSetup } from "@codemirror/basic-setup"
import { markdown } from "@codemirror/lang-markdown"
import { indentWithTab } from "@codemirror/commands"
import { EditorView, keymap } from "@codemirror/view"

export default (config) => {
  config = {
    ...{
      state: EditorState.create({
        extensions: [
          basicSetup,
          keymap.of([indentWithTab]),
          markdown()
        ]
      }),
      parent: document.body
    }, ...config
  }
  let editor = new EditorView(config)
}


