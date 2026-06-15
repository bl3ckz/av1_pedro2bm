export default function Loading() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-slate-700 rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-red-600 border-r-red-600 rounded-full animate-spin" />
        </div>
        <p className="text-slate-400 font-semibold">Carregando...</p>
      </div>
    </div>
  );
}
