import React from "react";
import { useEffect, useRef } from "react";

export default function Editor({ code, setCode, language }) {
  const editorRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    const modeMap = {
      html: "htmlmixed",
      css: "css",
      javascript: "javascript",
    };

    const cmInstance = window.CodeMirror.fromTextArea(textareaRef.current, {
      mode: modeMap[language] || "htmlmixed",
      lineNumbers: true,
      lineWrapping: true,
      theme: "default",
    });

    cmInstance.on("change", (editor) => {
      setCode(editor.getValue());
    });

    editorRef.current = cmInstance;

    return () => cmInstance.toTextArea();
  }, [language]);

  return (
    <textarea
      ref={textareaRef}
      defaultValue={code}
      className="w-full h-64 border border-gray-300"
    />
  );
}