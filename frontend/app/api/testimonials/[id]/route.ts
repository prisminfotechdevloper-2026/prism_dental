import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const backendUrl = `http://127.0.0.1:8000/api/testimonials/${id}/`;

    try {
      const res = await fetch(backendUrl, {
        method: "DELETE",
      });
      if (res.ok) {
        return new NextResponse(null, { status: 204 });
      }
    } catch (err) {
      console.warn("Backend unreachable for delete:", err);
    }

    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to delete" },
      { status: 500 }
    );
  }
}
