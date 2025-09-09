import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Anoma Intents Demo</h1>
      <p>
        <Link href="/intent-composer">Go to Intent Composer Demo</Link>
      </p>
    </div>
  );
}
