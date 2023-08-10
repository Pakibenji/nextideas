import { createUserWithEmailAndPassword } from "@firebase/auth";
import { NextResponse } from "next/server";
import { auth } from "./firebase-config";

export async function POST(request) {
  const { email, password, task } = await request.json();
  if (task === "register") {
    console.log("case - register");

    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log({ token: credentials.user.accesToken, uuid: credentials.user.uid});
        console.log({ credentials });
    return NextResponse.json({
      status: 200,
      message: `account for ${email} created`,
    });
  }

  if (task === "login") {
    //TODO
  }

  return NextResponse.json({ status: 200, message: "unknown task" });
}
