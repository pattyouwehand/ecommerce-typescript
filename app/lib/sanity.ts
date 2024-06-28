import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  projectId: "bs4wf1tf",
  dataset: "production",
  apiVersion: "2024-06-28",
  useCdn: true
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}