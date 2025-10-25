export interface PunkSong {
  id: number
  name: string
  artist: string
}

export async function getPunkSongs(): Promise<PunkSong[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100))
  
  return [
    { id: 1, name: "Anarchy in the U.K.", artist: "Sex Pistols" },
    { id: 2, name: "London Calling", artist: "The Clash" },
    { id: 3, name: "Blitzkrieg Bop", artist: "Ramones" },
    { id: 4, name: "God Save the Queen", artist: "Sex Pistols" },
    { id: 5, name: "Should I Stay or Should I Go", artist: "The Clash" },
    { id: 6, name: "I Wanna Be Sedated", artist: "Ramones" },
    { id: 7, name: "White Riot", artist: "The Clash" },
    { id: 8, name: "Pretty Vacant", artist: "Sex Pistols" },
  ]
}
