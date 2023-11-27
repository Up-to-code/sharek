"use client";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/app/db/db";
import { GithubAuthProvider } from "firebase/auth";
import { Login, creatAuth } from "@/auth/Sign";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import {
  DocumentData,
  DocumentReference,
} from "firebase/firestore";
let Errormasseg = false;

function Card({ type }: { type: string }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [Loginword, setloginword] = useState(type);
  const [ErrorMassage, setErrorMassage] = useState(
    "Check your email or password"
  );
  const Google_auth = async () => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider).then(async (reslit) => {
      if (reslit) {
        return true;
      }
    });
  };
  const GithubAuth = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);

        location.href = "/Account";
        // const user = result.user;
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.customData.email;
        const credential = GithubAuthProvider.credentialFromError(error);
      });
  };
  type Post = {
    name: string;
    id: string;
    ref: DocumentReference<DocumentData>;
    title: string;
  };

  return (
    <div className="min-w-[300px] min-h-max  border py-5 px-10">
      <h1 className="font-extrabold  my-7 ">{type}</h1>
      {Errormasseg ? (
        <Alert className="mb-5">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{ErrorMassage}</AlertDescription>
        </Alert>
      ) : (
        ""
      )}

      <div className="flex flex-col gap-4 ">
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          name="email"
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <Input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex gap-3 items-center max-w-xs">
          if you complete this means that you agree to
          <Link href={"/"} className="text-blue-800 ">
            the site policy
          </Link>
        </div>
        <Button
          className="bg-zinc-900 "
          onClick={() => {
            setloginword("Laoding..");
            if (type == "Login") {
              Login(userEmail, userPassword).then((e: any) => {
                if (e === true) {
                  setloginword("Login");

                  location.href = "/Account";
                } else {
                  setloginword("Login");
                  if (e.errorMessage) {
                    Errormasseg = true;
                  }
                  console.log(e.errorMessage);
                }
              });
            }
            //  if  Sign up
            if (type == "Sign up") {
              creatAuth(userEmail, userPassword).then(async (e: any) => {
                if (e === true) {
                  setloginword("Sign up");
                  location.href = "/Account";
                } else {
                  setloginword("Sign up");
                  if (e.errorMessage) {
                    if (
                      e.errorMessage ==
                        "Firebase: Error (auth/email-already-in-use)." ||
                      "Firebase: Error (auth/invalid-email)."
                    ) {
                      setErrorMassage("this email-already-in-use");
                    }
                    if (
                      e.errorMessage ==
                      "Firebase: Password should be at least 6 characters (auth/weak-password)."
                    ) {
                      setErrorMassage(
                        "Password should be at least 6 characters"
                      );
                    }
                    Errormasseg = true;
                  }
                  console.log(e.errorMessage);
                }
              });
            }
          }}
        >
          {Loginword}
        </Button>
      </div>
      <div className="flex  gap-5 justify-between mt-8">
        <Button
          className="flex gap-2 w-36 justify-evenly  "
          onClick={() => {
            GithubAuth();
          }}
        >
          <FaGithub />
          Github
        </Button>
        <Button
          className="flex gap-2 w-36 justify-evenly  "
          onClick={async () => {
            let app = await Google_auth()
              .then((r) => {
                if (r) {
                  location.href = "/Account";
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          <FaGoogle />
          Google
        </Button>
      </div>
    </div>
  );
}

export default Card;
