import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ROUTES } from "@/lib/constants";
import { Home, Menu, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { ToggleTheme } from "./ToggleTheme";

export function SDropdownMenu(props: { className?: string }) {
  return (
    <div className={props.className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Options</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {ROUTES.map((route) => (
              <DropdownMenuItem key={route.path}>
                <Home className="mr-2 h-4 w-4" />
                <Link to={route.path}>{route.name}</Link>{" "}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Moon className="mr-2 h-4 w-4" />
              <Link to={"/"}>Thème</Link>{" "}
              <DropdownMenuShortcut>
                <ToggleTheme />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
