import type { Route } from "./+types/home";
import Quiz from "../components/Quiz";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "치히로의 지장간 암기 도우미" },
    { name: "치히로", content: "치히로의 지장간 암기 도우미" },
  ];
}

export default function Home() {
  return <Quiz />;
}
