import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream JOB!" },
  ];
}

export default function Home() {
  return <main>
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Application & Resume Ratings</h1>

      </div>

    </section>
  </main>
}
