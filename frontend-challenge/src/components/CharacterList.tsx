// File: src/components/CharacterList.tsx
"use client"

import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { APIResponse, Character } from "../types"

export default function CharacterList() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [nextPage, setNextPage] = useState<string | null>(
    "https://swapi.dev/api/people/"
  )
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchCharacters = async () => {
    if (!nextPage) return
    setIsLoading(true)
    setError(null)
    try {
      const res = await fetch(nextPage, {
        headers: {
          Accept: "application/json",
        },
      })
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }
      const data: APIResponse = await res.json()
      if (data.results) {
        setCharacters((prevCharacters) => [...prevCharacters, ...data.results])
        setNextPage(data.next)
      } else {
        throw new Error("Unexpected API response structure")
      }
    } catch (error) {
      console.error("Error fetching characters:", error)
      setError("Falha ao carregar personagens. Por favor, tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const formatHeight = (height: string): string => {
    const heightInMeters = parseInt(height) / 100
    return heightInMeters.toFixed(2)
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  if (isLoading && characters.length === 0) {
    return <div>Carregando personagens...</div>
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <InfiniteScroll
      dataLength={characters.length}
      next={fetchCharacters}
      hasMore={!!nextPage}
      loader={<h4>Carregando mais personagens...</h4>}
    >
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">Altura</th>
            <th className="px-4 py-2">N° de espaçonaves</th>
            <th className="px-4 py-2">Filmes</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="border px-4 py-2">{character.name}</td>
              <td className="border px-4 py-2">
                {formatHeight(character.height)} m
              </td>
              <td className="border px-4 py-2">{character.starships.length}</td>
              <td className="border px-4 py-2">{character.films.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </InfiniteScroll>
  )
}
