/**
 * Site footer
 */
export const Footer = () => {
  return (
    <div className="min-h-0 py-5 px-1 mb-11 lg:mb-0">
      <div className="w-full">
        <ul className="menu menu-horizontal w-full">
          <div className="flex justify-center items-center gap-2 text-sm w-full">
            <div className="flex justify-center items-center gap-2">
              <p className="m-0 text-center">Built with 💪 by</p>
              <a
                className="flex justify-center items-center gap-1"
                href="https://x.com/swolidity"
                target="_blank"
                rel="noreferrer"
              >
                <span className="link">@swolidity</span>
              </a>
            </div>
            <span>·</span>
            <div className="text-center">
              <a href="https://discord.gg/f5tsbbeVC4" target="_blank" rel="noreferrer" className="link">
                Support
              </a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
