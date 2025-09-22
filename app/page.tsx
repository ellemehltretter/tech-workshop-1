import Greeting from "@/components/Greeting"
import Navigation from "@/components/Navigation"

export default function Home() {
  return (
      <section className="bg-fuchsia-200 min-h-screen flex flex-col items-center">
          <Navigation />
          <h1 className="text-3xl font-bold text-fuchsia-900 text-center pt-4">Tech Workshop 1</h1>
          <button className="mt-4 rounded bg-fuchsia-900 text-center px-4 text-white cursor-pointer hover:bg-fuchsia-600 py-4">This is a button</button>
          <Greeting name="KTP"/>
          <Greeting name="Elle"/>
      </section>
  );
}
