import React, { useState } from "react";
import Editor from "./Editor.jsx";
import Output from "./Output.jsx";

export default function App() {
  const [html, setHtml] = useState("<h1>Hello!</h1>");
  const [css, setCss] = useState("h1 { color: blue; }");
  const [js, setJs] = useState("console.log('Hi!');");

  return (
    <div className="min-h-screen bg-zinc-900 text-white px-4 py-8 font-sans">
      <h1 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2">
        <span role="img" aria-label="flask">🧪</span>
        Student Code Playground
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-zinc-800 rounded-xl p-4 shadow">
          <h2 className="text-lg font-semibold mb-2 text-cyan-300">HTML</h2>
          <Editor code={html} setCode={setHtml} language="html" />
        </div>
        <div className="bg-zinc-800 rounded-xl p-4 shadow">
          <h2 className="text-lg font-semibold mb-2 text-green-300">CSS</h2>
          <Editor code={css} setCode={setCss} language="css" />
        </div>
        <div className="bg-zinc-800 rounded-xl p-4 shadow">
          <h2 className="text-lg font-semibold mb-2 text-yellow-300">JavaScript</h2>
          <Editor code={js} setCode={setJs} language="javascript" />
        </div>
      </div>

      <div className="bg-zinc-800 rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-4 text-white">Live Preview</h2>
        <Output html={html} css={css} js={js} />
      </div>
    </div>
  );
}
