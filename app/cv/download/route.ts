import { readFile } from "node:fs/promises";
import path from "node:path";

// Serves the CV with an attachment header so mobile browsers download it
// instead of opening it in the viewer (they ignore the `download` attribute).
export async function GET() {
  const file = await readFile(
    path.join(process.cwd(), "public", "elliot-lucky-cv.pdf"),
  );

  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Elliot-Lucky-CV.pdf"',
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
