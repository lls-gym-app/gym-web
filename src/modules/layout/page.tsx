import { Header } from "./header";

type props = {
  children: React.ReactNode
}

export function Page({ children }: props) {
  return (
    <>
      <Header />
      <main className="container m-auto pt-6 flex justify-center">
        { children }
      </main>
    </>
  )
}