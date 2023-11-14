import { useZupass, ZupassLoginButton } from "zukit";

export default function Home() {
  const [zupass] = useZupass();
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <main className="flex flex-col items-center gap-8 bg-white rounded-2xl max-w-screen-sm mx-auto h-[24rem] p-8">
        <h1 className="font-bold text-2xl">Zukit Example</h1>
        <div className="flex flex-row gap-8 items-baseline">
          {(zupass.status === "logged-out" || !zupass.anonymous) && (
            <ZupassLoginButton />
          )}
          {zupass.status === "logged-out" && <span>or</span>}
          {(zupass.status === "logged-out" || zupass.anonymous) && (
            <ZupassLoginButton anonymous />
          )}
        </div>
        <Status />
      </main>
    </div>
  );
}

function Status() {
  const [zupass] = useZupass();
  const { status } = zupass;
  switch (status) {
    case "logged-out":
    case "logging-in":
      return null;
    case "logged-in":
      if (zupass.anonymous) {
        return (
          <div className="flex flex-col gap-2">
            <div>✅ Valid zero-knowledge proof</div>
            <div>
              👁️‍🗨️ Anonymity set <strong>{zupass.group.name}</strong>
            </div>
            <div>🕶️ You are one of {zupass.group.members.length} members</div>
          </div>
        );
      } else {
        return (
          <div className="flex flex-col gap-2">
            <div>✅ Valid zero-knowledge proof</div>
            <div>
              👋 Welcome, <strong>{zupass.participant.email}</strong>
              <Pellet>{zupass.participant.commitment}</Pellet>
            </div>
            <div>🖋️ Email {zupass.participant.email}</div>
            <div>👓 UUID {zupass.participant.uuid}</div>
          </div>
        );
      }
    default:
      throw new Error(`Invalid status ${status}`);
  }
}

function Pellet({ children }: { children: string }) {
  return (
    <span className="inline-block bg-gray-100 rounded-md px-2 text-sm font-bold ml-2">
      {children}
    </span>
  );
}
