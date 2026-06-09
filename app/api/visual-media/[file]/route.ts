import { createReadStream, statSync } from "fs"
import { NextRequest, NextResponse } from "next/server"
import {
  getVisualMediaContentType,
  resolveVisualMediaPath,
} from "@/lib/visual-media"

export const runtime = "nodejs"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ file: string }> }
) {
  const { file } = await params
  const filePath = resolveVisualMediaPath(file)

  if (!filePath) {
    return NextResponse.json({ error: "Media not found" }, { status: 404 })
  }

  const stat = statSync(filePath)
  const contentType = getVisualMediaContentType(file)
  const range = request.headers.get("range")

  if (range) {
    const [startStr, endStr] = range.replace(/bytes=/, "").split("-")
    const start = Number.parseInt(startStr, 10)
    const end = endStr ? Number.parseInt(endStr, 10) : stat.size - 1
    const chunkSize = end - start + 1

    const stream = createReadStream(filePath, { start, end })

    return new NextResponse(stream as unknown as BodyInit, {
      status: 206,
      headers: {
        "Content-Range": `bytes ${start}-${end}/${stat.size}`,
        "Accept-Ranges": "bytes",
        "Content-Length": String(chunkSize),
        "Content-Type": contentType,
      },
    })
  }

  const stream = createReadStream(filePath)

  return new NextResponse(stream as unknown as BodyInit, {
    headers: {
      "Content-Length": String(stat.size),
      "Content-Type": contentType,
      "Accept-Ranges": "bytes",
    },
  })
}
