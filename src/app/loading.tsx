export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="flex items-center gap-3 text-muted-foreground">
        <span className="size-2 animate-pulse rounded-full bg-primary" />
        <span className="size-2 animate-pulse rounded-full bg-primary [animation-delay:120ms]" />
        <span className="size-2 animate-pulse rounded-full bg-primary [animation-delay:240ms]" />
      </div>
    </div>
  );
}
