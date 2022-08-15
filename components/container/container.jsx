export default function Container({ children }) {
  return (
    <div className={`w-[calc(100%-24px)] md:w-[calc(800px-24px)] mx-auto`}>
      {children}
    </div>
  );
}
