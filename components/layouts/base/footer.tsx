export const Footer = () => {
  return (
    <footer className="flex w-full flex-col">
      <div className="mx-auto w-full border-y border-dashed">
        <div>
          <div className="bg-background max-w-[1400px] min-[1800px]:max-w-[1536px] mx-auto grid gap-6 border-x border-dashed px-4 py-8 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-16 lg:grid-cols-4 lg:px-8">
            <div className="flex flex-col items-center">Footer Column 1</div>
            <div className="flex flex-col items-center">Footer Column 2</div>
            <div className="flex flex-col items-center">Footer Column 3</div>
            <div className="flex flex-col items-center">Footer Column 4</div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-dashed">
          <p className="bg-background/40 backdrop-blur-md w-full max-w-[1400px] min-[1800px]:max-w-[1536px] mx-auto border-x border-dashed px-4 py-2 text-center">
            Alireza Zahiri - All rights reserved &copy; 2025
          </p>
        </div>
      </div>
    </footer>
  );
};
