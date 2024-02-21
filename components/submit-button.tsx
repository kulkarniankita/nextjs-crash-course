import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-orange-900 hover:bg-orange-950 text-white w-full px-6 py-3 rounded-md"
      aria-disabled={pending}
    >
      {pending ? 'Loading...' : 'Add'}
    </button>
  );
}

export default SubmitButton;
