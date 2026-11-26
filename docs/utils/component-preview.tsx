import { cn } from "cn"
import { ComponentProps } from "react"
type ComponentPreviewProps=ComponentProps<'div'>&{title?:string}
const ComponentPreview=({children,title,className,...props}:ComponentPreviewProps)=>{
    return <section className="flex w-full justify-center px-0">
  <div {...props} className={cn("w-full overflow-hidden rounded-xl border border-neutral-500/30 bg-neutral-500/5 shadow-2xl shadow-black/20",className)}>
    {/* window bar */}
    <div className="flex min-w-0 items-center gap-2 border-b border-neutral-500/30 px-3 py-2.5 sm:px-4 sm:py-3">
      <span className="size-2.5 shrink-0 rounded-full bg-red-500/60" />
      <span className="size-2.5 shrink-0 rounded-full bg-yellow-500/60" />
      <span className="size-2.5 shrink-0 rounded-full bg-green-500/60" />
      {title && <span className="min-w-0 truncate font-mono text-neutral-400/40">{title}</span>}
    </div>

    {/* unga comment component */}
    <div className="flex w-full min-w-0 justify-center p-2.5 sm:p-6 md:p-8">
      <div className="w-full min-w-0 max-w-xl">{children}</div>
    </div>
  </div>
</section>
}
export default ComponentPreview