'use client';

import { useFormState } from 'react-dom';
import { sellYourItemAction } from '@/actions';

const initialState = {
  message: '',
  errors: null,
};

const UploadForm: React.FC = () => {
  const [state, formAction] = useFormState(sellYourItemAction, initialState);

  return (
    <div className="px-12 py-12 ">
      <h2 className="text-2xl lg:text-4xl font-bold mb-4">Sell your Item!</h2>
      <div className="max-w-md mx-auto mt-10 p-6 rounded-lg border-2 border-gray-500 border-opacity-10 shadow-lg">
        {state?.type === 'error' && (
          <p className="text-red-700 text-xs mb-2 bg-slate-200 border-2 border-gray-300 rounded-md p-2">
            {state.message}
          </p>
        )}
        <form action={formAction}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 mb-2">
              Name
            </label>
            <input type="text" id="name" name="name" />
            {state?.errors?.name && (
              <span id="name-error" className="text-red-600 text-sm">
                {state.errors.name.join(',')}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-600 mb-2">
              Price
            </label>
            <input type="number" id="price" name="price" />
            {state?.errors?.price && (
              <span id="name-error" className="text-red-600 text-sm">
                {state.errors.price.join(',')}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-600 mb-2">
              Description
            </label>
            <textarea id="description" name="description"></textarea>
            {state?.errors?.description && (
              <span id="name-error" className="text-red-600 text-sm">
                {state.errors.description.join(',')}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-600 mb-2">
              Image
            </label>
            <input type="file" accept="image/*" id="imageUrl" name="imageUrl" />
            {state?.errors?.imageUrl && (
              <span id="name-error" className="text-red-600 text-sm">
                {state.errors.imageUrl.join(',')}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
