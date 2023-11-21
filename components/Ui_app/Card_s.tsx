import { Button } from "../ui/button"
import  { Github } from "lucide-react"
import { FaGithub, FaGoogle }  from "react-icons/fa"
function Card_s() {
  return (
    <div className="flex f  p-6 gap-5">
        <Button className="flex gap-2 w-36   justify-evenly  ">
        <FaGithub />
            Github
        </Button>
        <Button className="flex gap-2 w-36   justify-evenly  ">
            <FaGoogle />
            Github
        </Button>
    </div>
  )
}

export default Card_s