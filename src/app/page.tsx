import Body from "./(components)/body";

export default function Home() {
  return (
    <>
      {" "}
      <header className="border-t-8 border-green w-full max-w-6xl mx-auto my-0 py-3">
        <h3 className="text-green text-2xl">NG Alternatives</h3>
      </header>
      <main className="max-h-[100vh] text-brand">
        <Body />
      </main>
    </>
  );
}
