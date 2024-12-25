import React, { useState } from 'react';
import { Settings } from 'lucide-react';

interface PromptEditorProps {
  defaultPrompt: string;
  onSave: (prompt: string) => void;
}

export default function PromptEditor({ defaultPrompt, onSave }: PromptEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [prompt, setPrompt] = useState(defaultPrompt);

  const handleSave = () => {
    onSave(prompt);
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-white">Analysis Prompt</h2>
          <button
            onClick={() => setIsEditing(true)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
        <pre className="whitespace-pre-wrap text-gray-300 text-sm bg-gray-900/50 p-4 rounded-lg">
          {defaultPrompt}
        </pre>
      </div>
    );
  }

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-white">Edit Analysis Prompt</h2>
      </div>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full h-64 bg-gray-900/50 text-gray-300 p-4 rounded-lg mb-4 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Enter your analysis prompt..."
      />
      <div className="flex justify-end space-x-4">
        <button
          onClick={() => setIsEditing(false)}
          className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}