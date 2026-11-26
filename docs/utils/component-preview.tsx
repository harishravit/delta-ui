import { cn } from "cn"
import { ComponentProps } from "react"
type ComponentPreviewProps=ComponentProps<'div'>&{title?:string}
const ComponentPreview=({children,title,className}:ComponentPreviewProps)=>{
    return <section className="flex justify-center">
  <div className={cn("overflow-hidden rounded-xl border border-neutral-500/30 bg-neutral-500/5 shadow-2xl shadow-black/20",className)}>
    {/* window bar */}
    <div className="flex items-center gap-2 border-b border-neutral-500/30 px-4 py-3">
      <span className="size-2.5 rounded-full bg-red-500/60" />
      <span className="size-2.5 rounded-full bg-yellow-500/60" />
      <span className="size-2.5 rounded-full bg-green-500/60" />
      <code className="text-neutral-400/40">{title}</code>
    </div>

    {/* unga comment component */}
    <div className="flex justify-center p-6 md:p-10">
      <div className="w-full max-w-xl">{children}</div>
    </div>
  </div>
</section>
}
export default ComponentPreview