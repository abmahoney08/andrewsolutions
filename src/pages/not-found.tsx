import { AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#0d1020] p-4 text-[#e8eef8]">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#14192d] p-8 text-center shadow-2xl">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 text-red-400">
          <AlertCircle className="h-8 w-8" />
        </div>
        <h1 className="font-editorial text-3xl font-semibold text-[#f1f3f8]">
          404 Page Not Found
        </h1>
        <p className="mt-3 text-sm text-[#b9c3d2]">
          The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block rounded-lg bg-[#a5f2df] px-5 py-2.5 text-sm font-medium text-[#0d1020] transition-colors hover:bg-[#8ee8d2]"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
