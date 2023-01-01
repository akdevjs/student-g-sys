import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const onUnderlineClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  const onListClick = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, 'unordered-list-item'));
  };

  const onHeadingClick = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, 'header-one'));
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };


  return (
    <div className={`rich-text-editor ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className={`toolbar ${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
        <button className={`${isDarkMode ? 'text-white' : 'text-gray-800'} font-bold py-2 px-4 rounded`} onClick={onBoldClick}>
          Bold
        </button>
        <button className={`${isDarkMode ? 'text-white' : 'text-gray-800'} font-italic py-2 px-4 rounded`} onClick={onItalicClick}>
          Italic
        </button>
        <button className={`${isDarkMode ? 'text-white' : 'text-gray-800'} font-underline py-2 px-4 rounded`} onClick={onUnderlineClick}>
          Underline
        </button>
        <button className={`${isDarkMode ? 'text-white' : 'text-gray-800'} font-list py-2 px-4 rounded`} onClick={onListClick}>
          List
        </button>
        <button className={`${isDarkMode ? 'text-white' : 'text-gray-800'} font-heading py-2 px-4 rounded`} onClick={onHeadingClick}>
          Heading
        </button>
        <button className={`${isDarkMode ? 'text-white' : 'text-gray-800'} font-dark-mode py-2 px-4 rounded`} onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <Editor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={(editorState) => setEditorState(editorState)}
        className={`${isDarkMode ? 'text-white bg-gray-900' : 'text-gray-800 bg-white'} p-4 rounded-lg`}
      />
    </div>
  );
};

export default RichTextEditor;
