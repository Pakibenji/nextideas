import { NextResponse } from "next/server"
import ideas from "../ideas.json"

export async function GET(request, context) 
 {
    const { id } = context.params;
    const idea = ideas.find((idea) => idea.id === id);
    return NextResponse.json({
        idea,
        msg: `retrieved param from end point ${id}`,
    });

} 