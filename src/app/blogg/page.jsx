import Mainpage from "@/components/blogg/blogg_mainpage/Mainpage.jsx"

export const metadata = {
  title: 'Blogg - Naturity',
  description: 'Naturity sin blogg dekker oppdateringer og kunnskap.',
}

export default function Blogg() {
    return (
      <main>
        <h1 className="bloggh1">Blogg</h1>
        <Mainpage />
      </main>
    )
  }
  