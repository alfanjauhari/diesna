export default function Wrapper({ children }) {
  return (
    <main className="flex-grow px-6 md:px-12 lg:px-24 mt-8 md:mt-16">
      {children}
    </main>
  );
}
