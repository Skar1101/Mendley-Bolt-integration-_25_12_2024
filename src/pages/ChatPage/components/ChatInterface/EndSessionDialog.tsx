import React from 'react';

interface EndSessionDialogProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function EndSessionDialog({ isOpen, onConfirm, onCancel }: EndSessionDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 max-w-md w-full mx-4">
        <h3 className="text-xl font-semibold text-white mb-4">End Chat Session?</h3>
        <p className="text-gray-300 mb-6">
          Would you like to end this chat session? You'll be taken to a summary of our conversation.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-gray-300 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            End Session
          </button>
        </div>
      </div>
    </div>
  );
}