import Api from "../../api/content"

export default {
  getPage(pageID: string | number, populate?: string) {
    const url = `/pages/${pageID + ("?" + populate || "populate=deep")}`

    return Api.get(url)
  }
}
