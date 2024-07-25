import CharacterList from "../components/CharacterList"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Personagens dos filmes de Star Wars
      </h1>
      <CharacterList />
    </div>
  )
}
