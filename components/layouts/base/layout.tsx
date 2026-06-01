import { Footer } from "./footer";
import { Header } from "./header";
import "./style.css";

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full min-w-0 flex-col">
      <Header />
      <main className="flex flex-1 flex-col line-pattern">
        <div className="bg-background mx-auto min-h-screen h-full w-full max-w-[1400px] border-dashed min-[1400px]:border-x min-[1800px]:max-w-[1536px]">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};
