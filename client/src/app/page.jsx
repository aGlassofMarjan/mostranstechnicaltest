import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center gap-5" style={{ height: '100vh' }}>
        <h1>Mostrans <br /> Technical <br /> Test</h1>
        <Link href={'/character-list'}>
          <button type="button" className="btn btn-primary">Begin App</button>
        </Link>
      </div>
    </>

  );
}
