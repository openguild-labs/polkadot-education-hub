import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t-2 px-4 border-muted backdrop-blur-md bg-background/80">
      <div className="grid grid-cols-1 md:grid-cols-3 space-x-4 lg:grid-cols-4 gap-4 p-4 py-12">
        <Image
          src="/images/og-education-logo.png"
          alt="Polkadot Education Hub"
          width={100}
          height={100}
        />
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold font-unbounded">Polkadot Education Hub</h3>
          <p className="text-sm text-muted-foreground font-unbounded">
            A comprehensive education hub for Polkadot blockchain developers. Learn, build, and
            contribute to the Polkadot ecosystem through structured courses, workshops, and
            bootcamps.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Polkadot Resources</h3>
          <div className="flex flex-col gap-2">
            <a
              className="w-fit underline underline-offset-4 text-blue-500"
              target="_blank"
              href="https://docs.polkadot.com/"
            >
              Documentation
            </a>
            <a
              className="w-fit underline underline-offset-4 text-blue-500"
              target="_blank"
              href="https://wiki.polkadot.network/"
            >
              Polkadot Wiki
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Social links</h3>
          <div className="flex flex-col gap-2">
            <a
              className="w-fit underline underline-offset-4 text-blue-500"
              target="_blank"
              href="https://x.com/openguildwtf"
            >
              X
            </a>
            <a
              className="w-fit underline underline-offset-4 text-blue-500"
              target="_blank"
              href="https://discord.com/invite/YxwPSUer5Z"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
