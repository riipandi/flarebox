import type { FC } from 'hono/jsx'
import { cn } from "@/utils/variant";
import { RefreshIcon } from '@/components/icon'

type SpinnerProps = {
  class?: string
}

export const Spinner: FC<SpinnerProps> = ({
  class: className,
}) => (
  <RefreshIcon
    data-slot="spinner"
    role="status"
    aria-label="Loading"
    class={cn('size-4 animate-spin', className)}
  />
)
