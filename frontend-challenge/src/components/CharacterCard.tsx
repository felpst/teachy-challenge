import { Character } from "../types"

interface CharacterCardProps {
  character: Character
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
      <p>
        <strong>Altura:</strong> {character.height}cm
      </p>
      <p>
        <strong>N° de espaçonaves:</strong> {character.starships.length}
      </p>
      <p>
        <strong>Filmes:</strong> {character.films.length}
      </p>
    </div>
  )
}
