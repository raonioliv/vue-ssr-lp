import PageService from "../services/content/PageService"

async function useGetPageByID(slug: number, populate?: string) {
  const page = (await PageService.getPage(slug, populate)).data.data
  console.log(">>>", page)
  return page
}

/**
 *
 * @param param pageID or page slug
 * @param depth how much populate is the response (default to 3)
 * @return {Page}
 */
export async function useGetPage(param: string | number, depth: number) {
  let result
  const populate = depth ? `populate=deep,${depth}` : undefined
  try {
    if (!(typeof param == "string")) {
      result = await useGetPageByID(param, populate)
      console.log("raoni", result)
    }
  } catch (error) {
    result = error
  }

  return result
}
