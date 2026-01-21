import { ThemeProvider } from "@/components/theme-provider";
import { AppSidebar } from "./components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import Navigation from "./components/Navigation";
import Cookies from "js-cookie";

function App() {
  const cookieValueOfSidebarState = Cookies.get("sidebar_state");
  const defaultOpen = cookieValueOfSidebarState === "true";
  return (
    <div className="min-h-screen">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SidebarProvider defaultOpen={defaultOpen}>
          <div className="flex">
            {/* Sidebar */}
            <AppSidebar />

            {/* Close Sidebar Icon */}
            <div className="p-2">
              <SidebarTrigger />
            </div>

            {/* Main content wrapper */}
            <div className="flex-1 flex flex-col pr-5">
              {/* Navigation Bar */}
              <Navigation />
              <hr className="border-1" />
              {/* Main content goes here */}
              <div className="py-4 px-2">
                {/* Page content */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                blanditiis adipisci assumenda voluptate molestiae explicabo,
                quaerat nulla, facilis quisquam dolorem debitis, placeat
                voluptatem ea amet alias? Eaque dolorum nihil temporibus autem
                optio facilis deserunt vel, tempore amet iure, quia est modi
                possimus molestias numquam eveniet voluptatum quae quod. Ad,
                tempore!
              </div>
            </div>
          </div>
        </SidebarProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
