import { existsSync, readdirSync } from "fs"
import { join } from "path"

export const VISUAL_VIDEO_SOURCES: Record<string, string> = {
  "explore-01.mp4": join(
    "C:",
    "Users",
    "LOQ",
    "Downloads",
    "17512950-uhd_3840_2160_25fps.mp4"
  ),
  "visual-project-1.mp4": join(
    "C:",
    "Users",
    "LOQ",
    "Downloads",
    "Video Project 1.mp4"
  ),
  "visual-project-3.mp4": join(
    "C:",
    "Users",
    "LOQ",
    "Downloads",
    "Video Project 3.mp4"
  ),
}

const VISUAL_IMAGE_SOURCES: Record<string, string> = {
  "smartlayers-board.png": join(
    "C:",
    "Users",
    "LOQ",
    ".cursor",
    "projects",
    "d-graphic-designer-website",
    "assets",
    "c__Users_LOQ_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_ChatGPT_Image_May_16__2026__09_22_47_PM-738f2700-bfca-4b28-9ea9-deb99affc6c5.png"
  ),
  "cafe-day-board.png": join(
    "C:",
    "Users",
    "LOQ",
    ".cursor",
    "projects",
    "d-graphic-designer-website",
    "assets",
    "c__Users_LOQ_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_ChatGPT_Image_May_16__2026__05_37_31_PM-711c8f74-fb1b-43bb-bab1-4b5c6271e232.png"
  ),
  "ancient-history-buff-board.png": join(
    "C:",
    "Users",
    "LOQ",
    ".cursor",
    "projects",
    "d-graphic-designer-website",
    "assets",
    "c__Users_LOQ_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-4d91d508-32c6-4c88-9fbb-ae8d980a7c9c.png"
  ),
  "ancient-history-buff-banner.png": join(
    "C:",
    "Users",
    "LOQ",
    ".cursor",
    "projects",
    "d-graphic-designer-website",
    "assets",
    "c__Users_LOQ_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_banner_2.0-698ac777-70ab-48c0-b90b-2822c0c5e1ec.png"
  ),
}

export function resolveVisualMediaPath(file: string): string | null {
  if (VISUAL_VIDEO_SOURCES[file] && existsSync(VISUAL_VIDEO_SOURCES[file])) {
    return VISUAL_VIDEO_SOURCES[file]
  }

  if (VISUAL_IMAGE_SOURCES[file] && existsSync(VISUAL_IMAGE_SOURCES[file])) {
    return VISUAL_IMAGE_SOURCES[file]
  }

  const publicPath = join(
    process.cwd(),
    "public",
    "services",
    "visual-design",
    file
  )
  if (existsSync(publicPath)) return publicPath

  if (file === "social-scroll-mockup.png") {
    const assetDirs = [
      join(process.cwd(), "assets"),
      join(
        "C:",
        "Users",
        "LOQ",
        ".cursor",
        "projects",
        "d-graphic-designer-website",
        "assets"
      ),
    ]

    for (const dir of assetDirs) {
      if (!existsSync(dir)) continue
      const match = readdirSync(dir).find((name) => name.includes("c1fc5e4c"))
      if (match) return join(dir, match)
    }
  }

  return null
}

export function getVisualMediaContentType(file: string): string {
  if (file.endsWith(".png")) return "image/png"
  if (file.endsWith(".jpg") || file.endsWith(".jpeg")) return "image/jpeg"
  return "video/mp4"
}
