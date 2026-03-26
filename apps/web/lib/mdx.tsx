import * as runtime from "react/jsx-runtime"
import { mdxComponents } from "@/components/mdx/mdx-components"

function useMDXComponent(code: string) {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MDXContentProps {
  code: string
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code)
  return (
    <div className="prose-pf">
      <Component components={mdxComponents} />
    </div>
  )
}
