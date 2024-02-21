export default function Footer({ font }: { font: string }) {
  return (
    <footer className="py-12 bg-gray-951 text-gray-952">
      <div
        className={`max-w-[100rem] px-12 mx-auto flex justify-between ${font}`}
      >
        <p className="text-xl">© Anky Coby Bean Inc.</p>
      </div>
    </footer>
  );
}
