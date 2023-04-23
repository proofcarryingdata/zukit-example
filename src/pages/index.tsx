import { useZupass, ZupassLoginButton } from "zukit";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-16 gap-8`}>
      <h1>Zukit Example</h1>
      <div>
        <ZupassLoginButton />
      </div>
      <Status />
    </main>
  );
}

function Status() {
  const [zupass] = useZupass();
  switch (zupass.status) {
    case "logged-out":
      return <h2>Use the button above to log in</h2>;
    case "logging-in":
      return <h2>Logging in...</h2>;
    case "logged-in":
      return <h2>Welcome, anon</h2>;
  }
}
