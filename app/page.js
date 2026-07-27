import { Home } from "../components/Home";

export const revalidate = 3600;

export default async function HomePage() {
  return <Home locale="en" />;
}
