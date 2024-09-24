'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { deleteBrewery } from '@/app/actions/deleteBrewery';

const DeleteBreweryButton = ({ breweryId }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this brewery?')) {
      setIsDeleting(true);
      try {
        const result = await deleteBrewery(breweryId);
        if (result.success) {
          router.refresh();
        } else {
          console.error('Failed to delete brewery:', result.error);
        }
      } catch (error) {
        console.error('Error deleting brewery:', error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 disabled:bg-red-300"
    >
      {isDeleting ? 'Deleting...' : 'Delete'}
    </button>
  );
};

export default DeleteBreweryButton;