import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const dest = path.join(root, "public", "services", "visual-design")
const assetsDir = path.join(root, "..", ".cursor", "projects", "d-graphic-designer-website", "assets")

fs.mkdirSync(dest, { recursive: true })

const copies = [
  ["C:\\Users\\LOQ\\Downloads\\17512950-uhd_3840_2160_25fps.mp4", "explore-01.mp4"],
  ["C:\\Users\\LOQ\\Downloads\\Video Project 1.mp4", "visual-project-1.mp4"],
  ["C:\\Users\\LOQ\\Downloads\\Video Project 3.mp4", "visual-project-3.mp4"],
]

for (const [src, name] of copies) {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(dest, name))
    console.log("copied", name)
  } else {
    console.warn("missing", src)
  }
}

const assetRoots = [
  path.join(root, "assets"),
  assetsDir,
  "C:\\Users\\LOQ\\.cursor\\projects\\d-graphic-designer-website\\assets",
]

for (const dir of assetRoots) {
  if (!fs.existsSync(dir)) continue
  const mockup = fs.readdirSync(dir).find((f) => f.includes("c1fc5e4c"))
  if (mockup) {
    fs.copyFileSync(path.join(dir, mockup), path.join(dest, "social-scroll-mockup.png"))
    console.log("copied social-scroll-mockup.png")
    break
  }
}

console.log("files in dest:", fs.readdirSync(dest))
