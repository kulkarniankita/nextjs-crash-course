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
      <div className="max-w-xl mx-auto mt-10 p-12 rounded-lg border-2 border-gray-500 border-opacity-10 shadow-lg bg-gray-952">
        {state?.type === 'error' && (
          <p className="text-lg mb-2 bg-gray-953 border-2 border-gray-300 rounded-md p-2 my-4">
            {state.message}
          </p>
        )}
        <form action={formAction}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input type="text" id="name" name="name" />
            {state?.errors?.name && (
              <span id="name-error" className="text-red-600 text-sm">
                {state.errors.name.join(',')}
              </span>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="price" className="block mb-2">
              Price
            </label>
            <input type="number" id="price" name="price" />
            {state?.errors?.price && (
              <span id="name-error" className="text-red-600 text-sm">
                {state.errors.price.join(',')}
              </span>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block mb-2">
              Description
            </label>
            <textarea id="description" name="description"></textarea>
            {state?.errors?.description && (
              <span id="name-error" className="text-red-600 text-sm">
                {state.errors.description.join(',')}
              </span>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="image" className="block  mb-2">
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
            className="bg-orange-900 hover:bg-orange-950 text-white w-full px-6 py-3 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
