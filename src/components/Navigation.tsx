import { Aperture } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navigation = () => {
  return (
    <header className="w-full flex justify-end items-center  py-4 gap-4">
      {/* Left: Logo or Button */}
      <Button size="lg">
      {/* Earlier I used this custom color but removed it because it looked ugly => className="text-custom-color" */}
        <Aperture className="mr-2" />
        Click me
      </Button>

      {/* Right: Dark Mode + More Buttons */}
      <div className="flex items-center gap-4">
        <ModeToggle />
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {/* Add more buttons here if needed */}
      </div>
    </header>
  )
}

export default Navigation
