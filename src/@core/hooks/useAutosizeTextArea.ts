import { RefObject, useEffect } from 'react'

// Updates the height of a <textarea> when the value changes.
const useAutosizeTextArea = (textAreaRef: HTMLTextAreaElement, value: string) => {
  useEffect(() => {
    if (textAreaRef) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.style.height = '0px'
      const scrollHeight = textAreaRef.scrollHeight

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      if (scrollHeight <= 84) textAreaRef.style.height = scrollHeight + 'px'
      else {
        textAreaRef.style.height = 84 + 'px'
      }
    }
  }, [textAreaRef, value])
}

export default useAutosizeTextArea