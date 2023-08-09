import { NextResponse } from "next/server";
import ideas from "./ideas.json"

export async function GET(request) {
    return NextResponse.json(ideas)
}

export async function POST(request) {
    const { title, description } = await request.json()
    const idea = {
        id: Date.now().toString(),
        title,
        description,
    }
    ideas.push(idea)
    return NextResponse.json({idea, status: 201})
} 